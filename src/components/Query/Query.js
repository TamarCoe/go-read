import React from 'react'
import { WrapQuery, WrapLeft, WrapRight, Content } from './Style'
import Select from 'components/Select'
import query from 'mock/query.json'

const Query = () => {

    return (
        <WrapQuery>
            <div id="title">
                התאמה אישית של אינדיקציות
            </div>
            <Content>
                <WrapLeft>
                    <div id="select">
                        <Select label="אם בוצע" items={query.if_done} />
                    </div>
                    <div id="select">
                        <Select id="select" label="מיחידת דיבור" items={query.from_speech_unit} />
                    </div>
                    <div id="select">
                        <Select id="select" label="ליחידת דיבור" items={query.to_speech_unit} />
                    </div>
                    <div id="select">
                        <Select id="select" label="ועונה לקריטריון" items={query.meets_the_criteria} />
                    </div>
                    <div id="select">
                        <Select id="select" label="על פי רגישות" items={query.according_to_sensitivity} />
                    </div>
                </WrapLeft>
                <WrapRight>
                    <div id="select">
                        <Select id="select" label="אינדיקציה לתחום קושי" items={query.indication} />
                    </div>
                </WrapRight>
            </Content>
        </WrapQuery>
    )

}

export default Query