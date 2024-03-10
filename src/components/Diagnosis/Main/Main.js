import React, { useContext } from 'react'
import errors from 'mock/errors.json'
import ErrorsDetails from 'components/Diagnosis/ErrorsDetails'
import SelectRecord from 'components/Diagnosis/SelectRecord'
import RecordsWords from 'components/Diagnosis/RecordsWords'
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
                    {Object.keys(errors).map((errKey, index) =>
                        <WrapErrors key={index}>
                            <ErrorsDetails title={errors[errKey].label} items={errors[errKey].items} />
                        </WrapErrors>
                    )}
                </WrapLeft>
            </Content>
        </>
    )


}

export default Main


