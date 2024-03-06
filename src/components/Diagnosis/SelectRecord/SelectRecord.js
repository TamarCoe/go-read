import React, { useContext, useEffect } from 'react'
import records from 'mock/records'
import { Context } from 'components/Main/Context'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { StartButton, WrapSelectRecord, UploadButton } from './Style'
import Upload from 'components/Diagnosis/UploadRecord/UploadButton'
import UploadRecord from 'components/Diagnosis/UploadRecord'

const SelectRecord = () => {
    const { record, setRecord, localRecord, setLocalRecord } = useContext(Context)

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setRecord(JSON.parse(e.target.result));
        };
    };

    const changeFlag = (flag) => {
        setLocalRecord(flag)
        setRecord(0)
    }

    return (
        <WrapSelectRecord dir="rtl">
            <Button onClick={() => changeFlag(false)}>בחירת הקלטה </Button>
            {localRecord === false &&
                <FormControl fullWidth>
                    <Select dir="rtl"
                        displayEmpty
                        renderValue={(selected) => {
                            if (!selected) {
                                return <em>בחירת הקלטה</em>;
                            }

                            return selected?.filename;
                        }}
                        value={record}
                        onChange={({ target }) => {
                            setRecord(target.value)
                        }}
                        placeholder="בחירת הקלטה"
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>בחירת הקלטה</em>
                        </MenuItem>
                        {records.map((record) =>
                            <MenuItem value={record}>{record.filename}</MenuItem>
                        )}
                    </Select>

                </FormControl>}
            <Button onClick={() => changeFlag(true)}>העלאת הקלטה </Button>
            {
                localRecord &&
                <>
                    <Upload handleChange={handleChange} title={"העלאת קובף פיענוח"} />
                    <UploadRecord />
                </>
            }
            <StartButton disabled={!(record.filename && record.recording_url_file)}>
                פיענוח
            </StartButton>
        </WrapSelectRecord>
    )
}

export default SelectRecord