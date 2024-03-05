import React, { useContext } from 'react'
import records from 'mock/records'
import { Context } from 'components/Main/Context'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const SelectRecord = () => {
    const { record, setRecord } = useContext(Context)

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">בחירת הקלטה</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={record}
                label="בחירת הקלטה"
                onChange={({ target }) => {
                    setRecord(target.value)
                }}
            >
                {records.map((record) =>
                    <MenuItem value={record}>{record.filename}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default SelectRecord