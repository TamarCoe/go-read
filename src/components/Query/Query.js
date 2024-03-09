import React, { useEffect, useState } from 'react'
import { StyledIconButton, WrapSelect, WrapFooterButtons, WrapSection, StyledAddCircleOutlineIcon, WrapQuery, WrapLeft, WrapRight, Content } from './Style'
import Select from 'components/Select'
import query from 'mock/query.json'
import { Button } from '@mui/material'

const Query = () => {
    const [if_done, set_if_done] = useState(null)
    const [from_speech_unit, set_from_speech_unit] = useState(null)
    const [to_speech_unit, set_to_speech_unit] = useState(null)
    const [meets_the_criteria, set_meets_the_criteria] = useState(null)
    const [according_to_sensitivity, set_according_to_sensitivity] = useState(null)
    const [indication, set_indication] = useState(null)

    return (
        <WrapQuery>
            <div id="title">
                התאמה אישית של אינדיקציות
            </div>
            <Content>
                <WrapLeft>
                    <div className='ifTitle'>תנאים</div>
                    <div className='row'>
                        <Select value={if_done} handleChange={set_if_done} label="אם בוצע" items={query.if_done} />
                        <Select value={from_speech_unit} label="מיחידת דיבור" handleChange={set_from_speech_unit} items={query.from_speech_unit} />
                        <Select value={to_speech_unit} label="ליחידת דיבור" handleChange={set_to_speech_unit} items={query.to_speech_unit} />
                    </div>
                    <div className='row'>
                        <Select value={meets_the_criteria} label="ועונה לקריטריון" handleChange={set_meets_the_criteria} items={query.meets_the_criteria} />
                    </div>
                    <StyledIconButton disabled>
                        <StyledAddCircleOutlineIcon />
                    </StyledIconButton>
                </WrapLeft>
                <WrapRight>
                    <div className='indicateTitle'>אינדקציות</div>
                    <div className='row'>
                        <Select value={according_to_sensitivity} label="על פי רגישות" handleChange={set_according_to_sensitivity} items={query.according_to_sensitivity} />
                        <Select value={indication} width={'200px'} label="אינדיקציה לתחום קושי" handleChange={set_indication} items={query.indication} />
                    </div>
                </WrapRight>
            </Content>
            <WrapSection>
                <div className='overallSummary'>
                    <div className='titleConclusion'>מראה קריטריון בנוי</div>
                    <div className='conclusion'>
                        אם בוצעה
                        {" "}
                        {if_done?.label || "______"}
                        {" "}
                        מ
                        {from_speech_unit?.label || " ______"}

                        {" "}
                        {"ל"}
                        {to_speech_unit?.label || "______"}
                        {" "}
                        {"ועונה לקריטריון "}
                        {meets_the_criteria?.label || "______"}
                        {" "}
                        {"על פי רגישות"}
                        {" "}
                        {according_to_sensitivity?.label || "______"}
                        {", יש אינדיקציה לקושי "}
                        {indication?.label || "______"}
                    </div>
                </div>
                <div className='overallSummary'>
                    <div className='titleConclusion'>דוגמא</div>
                    <div className='conclusion'></div>
                </div>
            </WrapSection>
            <WrapFooterButtons>
                <Button className='footerButtons' disabled variant='outlined'>
                    הוסף לאינדיקציות
                </Button>
                <Button className='footerButtons' disabled variant='outlined'>
                    לצפייה באינדיקציות
                </Button>
            </WrapFooterButtons>
        </WrapQuery>
    )

}

export default Query