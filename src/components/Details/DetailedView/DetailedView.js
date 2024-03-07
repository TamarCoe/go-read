import React, { useContext } from 'react'
import { Context } from 'components/Main/Context'
import { WrapDetails, WrapDetail } from './Style'
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
            {getByType().map((item, index) => {
                const { bold, reference_word, transcription, typeBold, errorTypeBold, warningBold } = item
                return (
                    <div className='detailView'>
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
                            {reference_word || !bold && transcription}

                            {bold &&
                                <span id="bold">
                                    <span id="line">
                                        {reference_word && "|"}
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