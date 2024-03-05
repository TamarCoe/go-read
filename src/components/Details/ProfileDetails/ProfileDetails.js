import React from 'react'
import profile from 'mock/profile'
import { Wrap, Avatar, AgeAndGrade, Name, Details } from './Style'

const ProfileDetails = () => {
    const { img, name, grade, parentName, age, date } = profile

    return (
        <Wrap>
            <Avatar src={img} />
            <Details>
                <Name>{name}</Name>
                <AgeAndGrade>
                    <span>
                        {"גיל: "}
                        {age}
                    </span>
                    <span>
                        {"כיתה: "}
                        {grade}
                    </span>
                </AgeAndGrade>
                <AgeAndGrade>
                <span>
                        {"שם ההורה: "}
                        {parentName}
                    </span>
                    <span>
                        {"תאריך אבחון: "}
                        {date}
                    </span>
                </AgeAndGrade>
            </Details>
        </Wrap>
    )
}

export default ProfileDetails