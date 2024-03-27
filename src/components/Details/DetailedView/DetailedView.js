import React, { useContext } from 'react'
import { Context } from 'components/Main/Context'
import { WrapDetails } from './Style'
import { errorTypes } from 'mock'
import { Card } from 'styles/GlobalStyle'

const DetailedView = () => {
    const {
        indexTypeError,
        getByType
    } = useContext(Context)

    const errorType = errorTypes?.[indexTypeError]

    return (
        <WrapDetails>
            {getByType()?.map((item, index) => {
                const { bold, word_def_text, transcription, typeBold, errorTypeBold, warningBold } = item
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
                            {word_def_text || !bold && transcription}

                            {bold &&
                                <span id="bold">
                                    <span id="line">
                                        {word_def_text && "| "}
                                    </span>
                                    {transcription}
                                </span>
                            }

                        </Card>
                    </div>
                )
            }
            )}
        </WrapDetails>
    )
}

export default DetailedView