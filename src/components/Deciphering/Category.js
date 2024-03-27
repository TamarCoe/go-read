import React from 'react'
import { Vowel } from './Style';
import { Crud as DecipheringCrud } from './hooks'

const Category = (props) => {
    const { type, handleChange, label, items, index, phoneme } = props

    const { renderRow, getVowel, onChangeLetter } = DecipheringCrud()

    return (
        <div className="content-grid">
            <div className="title">{label}</div>
            <div className="content-items" >
                {Object.keys(items).map((keyVowel, indexVowel) => {
                    const vowel = renderRow(type, keyVowel, items, phoneme, index)
                    return (
                        <Vowel
                            {...vowel}
                            disabled={typeof vowel?.disabled === 'function' ? vowel.disabled(phoneme) : vowel?.disabled}
                            onClick={() => handleChange(phoneme, keyVowel, index, items)}
                            key={keyVowel}>
                            {items[keyVowel].name}
                            {vowel?.input && <input value={phoneme.phoneme} maxlength={1} onChange={(val) => onChangeLetter(val, index)} />}
                        </Vowel>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Category