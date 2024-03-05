import React, { useContext } from 'react'
import { Context } from 'components/Main/Context'
import { WrapDetails, WrapDetail } from './Style'
import { errorTypes } from 'mock'

const DetailedView = () => {
    const {
        indexTypeError,
        getByType
    } = useContext(Context)

    const errorType = errorTypes?.[indexTypeError]

    return (
        <WrapDetails>
            {getByType().map((item, index) => {
                const { bold, reference_word, transcription, typeBold, errorTypeBold } = item
                return (
                    <WrapDetail
                        key={index}
                       bold={bold} //bold all errors
                        errorTypeBold={errorTypeBold}//bold all types with border
                        typeBold={typeBold}//bold all error type with background
                        bg={errorTypeBold && errorType?.bg}
                       X color={errorTypeBold && errorType?.color}
                    >
                        {reference_word || !bold && transcription}

                        {bold &&
                            <span id="bold">
                                <span id="line">
                                    {reference_word && " | "}
                                </span>
                                {transcription}
                            </span>
                        }

                    </WrapDetail>
                )
            }
            )}
        </WrapDetails>
    )
}

export default DetailedView