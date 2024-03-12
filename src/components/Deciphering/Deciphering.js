import React, { useState } from "react";
import { transliterationItems } from 'mock/activeTranscriptions'
import { Table } from './Style'

const Deciphering = () => {
    const [phonemes, setPhonemes] = useState([
        'ב', 'כ', 'ד', 'ו', 'ר'
    ])

    const handlePlus = (index) => {
        const newPhonemes = [
            ...phonemes.slice(0, index),
            "",
            ...phonemes.slice(index)
        ];
        setPhonemes(newPhonemes)
    }

    return (
        <>

            <Table>
                {phonemes.map((phoneme, index) =>
                    <>
                        <div onClick={() => handlePlus(index)} className="header header-plus">+</div>
                        <div className="col">
                            <div className="header">{phoneme || <input className="header" maxlength={1}/>}</div>
                            <div className="content">
                                {transliterationItems.map((item, index) =>
                                    <div className="content-grid" key={index}>
                                        <div className="title">{item.label}</div>
                                        <div className="content-items">
                                            {item.items.map((type) =>
                                                <div className="row" key={type.id}>{type.label}</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
                <div >
                    <div className="header header-plus">+</div>
                </div>
            </Table>
        </>
    )
}

export default Deciphering