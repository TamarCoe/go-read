import React, { useContext } from 'react'
import Brain from 'assets/Brain.png'
import { Context } from 'components/Main/Context'
import { WrapImg, WrapBrain, Round, SubRound } from './Style'

const ShowBrain = () => {
    const { record } = useContext(Context)

    const getError = () => {
        let
            countErrorLetter = 0,
            countLetter = 0,
            countErrorVowel = 0,
            countVowel = 0

        // record.results.text_score.forEach(word => {
        //     word.transcription_details.phoneme_breakdown.forEach((phoneme) => {
        //         const { t_status, p_type } = phoneme

        //         if (p_type === 'letter')
        //             countLetter++
        //         else if (p_type === 'vowel')
        //             countVowel++

        //         if (t_status != 'CORRECT') {
        //             if (p_type === 'letter')
        //                 countErrorLetter++
        //             else if (p_type === 'vowel')
        //                 countErrorVowel++
        //         }
        //     })
        // });

        let errors = { vowel: true }

        // if (countVowel * 0.97 < countErrorVowel)
        //     errors.vowel = true
        // if (countLetter * 0.94 < countErrorLetter)
        //     errors.letter = true

        return errors
    }

    const items = [
        {
            id: 0,
            color: "#8db9c9",
            left: 7,
            top: -120,
            titles: [{ label: "אוצר מילים" }]
        },
        {
            id: 1,
            color: "#eac2bd",
            left: 30,
            top: -10,
            titles: [
                {
                    label: "אות",
                    error: getError().letter
                },
                {
                    label: "תנועה",
                    error: getError().vowel
                }]
        },
        {
            id: 2,
            color: "#ead19c",
            left: 240,
            top: 110,
            titles: [{ label: "דיוק" }, { label: "קצב" }]
        },
        {
            id: 3,
            color: "#ca8342",
            left: 726,
            top: -120
        },
        {
            id: 4,
            color: "#a07998",
            left: 950,
            top: -9
        },
        {
            id: 5,
            color: "#97b16c",
            left: 966,
            top: 100
        },
        // {
        //     id: 6,
        //     color: "#cb6568"
        // }
    ]

    const subRounds = [
        {
            id: 0,
            label: "אוצר מילים",
            top: 9,
            right: 19
        },
        {
            id: 0,
            label: "dsdfsad",
            top: -18,
            right: 65
        },
        {
            id: 0,
            label: "dsdfsad",
            top: -45,
            right: 20
        },

    ]



    return (
        <WrapBrain>
            <WrapImg>
                <img className='brain' src={Brain} />
            </WrapImg>

            {items.map((item, index) =>
                <Round {...item}>
                    {subRounds.map((subRound, index) =>
                        <SubRound {...subRound} {...item?.titles?.[index]}>
                            {item?.titles?.[index]?.label}
                        </SubRound>
                    )}
                </Round>)}

        </WrapBrain>
    )
}

export default ShowBrain