import React, { useContext } from 'react'
import ErrorsDetails from 'components/Diagnosis/ErrorsDetails'
import SelectRecord from 'components/Diagnosis/SelectRecord'
import RecordsWords from 'components/Diagnosis/RecordsWords'
import LinkDetails from 'components/Diagnosis/LinkDetails'
import PlayRecord from 'components/Diagnosis/PlayRecord'
import { useNavigate } from "react-router-dom";
import { WrapLeft, WrapErrors, WrapContent, RightSection } from './Style'
import { Context } from 'components/Main/Context'

const Main = () => {
    const navigate = useNavigate()
    const { setIndexMenuItem } = useContext(Context)

    return (
        <>
            <WrapContent>
                <RightSection>
                    <SelectRecord />
                    <RecordsWords />
                </RightSection>
                <WrapLeft>
                    <WrapErrors>
                        <ErrorsDetails />
                        <LinkDetails action={() => {
                            navigate('/details')
                            setIndexMenuItem(1)
                        }} />
                    </WrapErrors>
                    {/* <PlayRecord /> */}
                </WrapLeft>
            </WrapContent>
        </>
    )


}

export default Main


