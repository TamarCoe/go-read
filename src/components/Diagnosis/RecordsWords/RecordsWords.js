import React, { useContext } from 'react'
import { Context } from 'components/Main/Context'
import { WrapWrods } from './Style'

const RecordsWords = () => {
    const { record = {} } = useContext(Context)
    const { results = "" } = record

    return (
        <WrapWrods>
            {results.reference_text}
        </WrapWrods>
    )
}

export default RecordsWords