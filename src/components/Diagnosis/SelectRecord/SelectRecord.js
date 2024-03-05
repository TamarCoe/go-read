import React, { useContext, useEffect } from 'react'
import records from 'mock/records'
import { Context } from 'components/Main/Context'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { CloudUpload } from '@mui/icons-material'
import { VisuallyHiddenInput, WrapSelectRecord, UploadButton } from './Style'

const SelectRecord = () => {
    const { record, setRecord } = useContext(Context)

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setRecord(JSON.parse(e.target.result));
        };
    };

    return (
        <WrapSelectRecord>
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
            <UploadButton
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
            >
                <CloudUpload />
                העלאת הקלטה
                <VisuallyHiddenInput type="file" onChange={handleChange} />
            </UploadButton>
        </WrapSelectRecord>
    )
}

export default SelectRecord