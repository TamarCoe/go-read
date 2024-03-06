import React, { useContext } from 'react'
import errors from 'mock/errors.json'
import ErrorsDetails from 'components/Diagnosis/ErrorsDetails'
import SelectRecord from 'components/Diagnosis/SelectRecord'
import RecordsWords from 'components/Diagnosis/RecordsWords'
import LinkDetails from 'components/Diagnosis/LinkDetails'
import PlayRecord from 'components/Diagnosis/PlayRecord'
import { useNavigate } from "react-router-dom";
import { WrapLeft, Content, WrapErrors, WrapContent, RightSection } from './Style'
import { Context } from 'components/Main/Context'

const Main = () => {
    const navigate = useNavigate()
    const { setIndexMenuItem } = useContext(Context)

    return (
        <>
            <Content>
                <RightSection>
                    <SelectRecord />
                    <RecordsWords />
                </RightSection>
                <WrapLeft>
                    <WrapErrors>
                        <ErrorsDetails title={"דיבור"} items={errors.speech} />
                        {/* <LinkDetails action={() => {
                            navigate('/details')
                            setIndexMenuItem(2)
                        }} /> */}
                    </WrapErrors>
                    <WrapErrors >
                        <ErrorsDetails title={"זמן"} items={errors.time} />
                    </WrapErrors>
                    <WrapErrors>
                        <ErrorsDetails title={"קול"} items={errors.voice} />
                    </WrapErrors>
                </WrapLeft>
            </Content>
        </>
    )


}

export default Main


