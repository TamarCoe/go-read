import React from 'react'
import DarkButton from 'components/Buttons/DarkButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const LinkDetails = (props) => {

    return (
        <DarkButton {...props} size={"200px"}
        >תצוגה מפורטת
            <ChevronLeftIcon />
        </DarkButton>
    )
}

export default LinkDetails