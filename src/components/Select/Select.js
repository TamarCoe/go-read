import React from 'react'
import { FormControl, Select,MenuItem } from '@mui/material'

const CustomSelect = (props) => {
    const { label, items, handleChange = () => { } ,value} = props

    return (
        <FormControl fullWidth>
            <Select dir="rtl"
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
                    items.map((item) =>
                        <MenuItem value={item}>{item.label}</MenuItem>
                    )
                }
            </Select >

        </FormControl >
    )
}

export default CustomSelect