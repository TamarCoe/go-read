import React, { useContext } from 'react'
import { Context } from 'components/Main/Context'
import { WrapDetails } from './Style'
import { errorTypes } from 'mock'
import { Card } from 'styles/GlobalStyle'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'

const DetailedView = () => {
    const {
        indexTypeError,
        getByType
    } = useContext(Context)
    const { staticWords } = useSelector(state => state.words)

    const errorType = errorTypes?.[indexTypeError]
    const words = getByType()

    return (
        words ?
            <WrapDetails>
                {words.map((item, index) => {
                    const { word_def_index, status, bold, word_def_text, transcription, typeBold, errorTypeBold, warningBold } = item
                    return (
                        <div key={index} className='detailView'>
                            <Card
                                disabled
                                key={index}
                                bold={bold} //bold all errors
                                errorTypeBold={errorTypeBold}//bold all types with border
                                typeBold={typeBold}//bold all error type with background
                                warningBold={warningBold}
                                bg={errorTypeBold && errorType?.bg}
                                customColor={errorTypeBold && errorType?.color}
                            >
                                {/* {status === 'CORRECT' ? staticWords.word_defs[word_def_index].text : */}
                                <>
                                    {word_def_text || !bold && transcription}

                                    {bold &&
                                        <span id="bold">
                                            <span id="line">
                                                {word_def_text && "| "}
                                            </span>
                                            {transcription}
                                        </span>
                                    }
                                </>
                                {/* } */}
                            </Card>
                        </div>
                    )
                }
                )}
            </WrapDetails>
            :
            <CircularProgress size={20} />
    )
}

export default DetailedView