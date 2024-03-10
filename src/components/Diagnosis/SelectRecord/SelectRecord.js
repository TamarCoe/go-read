import React, { useContext, useEffect } from 'react'
import records from 'mock/records'
import Upload from 'components/Diagnosis/UploadRecord/UploadButton'
import UploadRecord from 'components/Diagnosis/UploadRecord'
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Context } from 'components/Main/Context'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { StartButton, WrapSelectRecord, UploadButton } from './Style'

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
            <Button variant="contained" className="selectRecord button" onClick={() => changeFlag(false)}>
                <SpatialAudioOffIcon />
                בחירת  הקלטה
            </Button>
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
                        {records.map((record, index) =>
                            <MenuItem key={index} value={record}>{record.filename}</MenuItem>
                        )}
                    </Select>

                </FormControl>}
            <Button variant="outlined" className="uploadRecord button" onClick={() => changeFlag(true)}>
                <UploadFileIcon />
                העלאת הקלטה
            </Button>
            {
                localRecord &&
                <div className='uploadButtons'>
                    <Upload handleChange={handleChange} title={"העלאת קובץ פיענוח"} />
                    <UploadRecord />
                </div>
            }
        </WrapSelectRecord>
    )
}

export default SelectRecord