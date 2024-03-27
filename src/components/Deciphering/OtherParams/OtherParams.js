import React, { useContext } from 'react'
import Select from 'components/Select'
import sourceChanges from 'mock/sourceChanges'
import meetsCriterion from 'mock/meetsCriterion'
import { map } from 'lodash'
import { Crud as MainCrud } from 'components/Deciphering/Main/hooks'
import { WrapOtherParams } from './Style'
import { useSelector } from 'react-redux'

const OtherParams = () => {
    const { word } = useSelector(state => state.words)
    const { addOtherParams } = MainCrud()
    const sourceChangesList = map(sourceChanges)

    return (
        <WrapOtherParams>
            <Select
                value={word.errors[0]}
                handleChange={(val) => addOtherParams(val, 0)}
                label="קריטריונים נוספים"
                items={sourceChangesList}
            />
            <Select
                value={word.errors[1]}
                handleChange={(val) => addOtherParams(val, 1)}
                label="סוגי טעויות נוספים"
                items={map(meetsCriterion)}
            />
        </WrapOtherParams>
    )
}

export default OtherParams