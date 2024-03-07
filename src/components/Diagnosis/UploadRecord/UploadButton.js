import React from 'react'
import { CloudUpload } from '@mui/icons-material'
import { UploadButton ,VisuallyHiddenInput} from './Style'

const Upload = (props) => {
    const { title, handleChange } = props

    return (
        <UploadButton
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
        >
            {title}
            <VisuallyHiddenInput type="file" onChange={handleChange} />
        </UploadButton>
    )
}

export default Upload