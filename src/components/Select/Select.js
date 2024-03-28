import React from 'react'
import { MuiSelect } from './Style'
import { FormControl, Select, MenuItem } from '@mui/material'

const CustomSelect = (props) => {
    const { width, label, items, handleChange = () => { }, value } = props

    return (
        <div style={{ width: width }}>
            <FormControl fullWidth>
                <MuiSelect dir="rtl"
                    displayEmpty
                    renderValue={(selected) => {
                        if (!selected) {
                            return <em>{label}</em>;
                        }

                        return selected?.label;
                    }}
                    value={value}
                    onChange={({ target }) => {
                        handleChange(target.value)
                    }}
                    placeholder="בחירת הקלטה"
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>{label}</em>
                    </MenuItem>
                    {
                        items.map((item, index) =>
                            <MenuItem key={index} value={item}>{item?.label}</MenuItem>
                        )
                    }
                </MuiSelect >

            </FormControl >
        </div>
    )
}

export default CustomSelect