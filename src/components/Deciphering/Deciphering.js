import React, { useContext } from "react";
import Category from "./Category";
import { Table } from './Style'
import { keys } from "mock/types";
import { Context } from "./Main/Context";
import { letterCharacters } from "mock/letterCharacters";
import { clarityCharacters } from "mock/clarityCharacters";
import { Crud as MainCrud } from './Main/hooks'
import { Crud as DecipheringCrud } from './hooks'
import { keysSourceChanges } from "mock/sourceChanges";
import { useSelector } from "react-redux";

const Deciphering = () => {
    const { vowelCode, letterAddOn } = useContext(Context)
    const { savePhoneme, handlePlus } = DecipheringCrud()
    const { handleClickVowelRow, handleClickOtherRow, handleClickLetterRow, handleClickClarityRow, } = MainCrud()

    const { phonemes, staticWord } = useSelector(state => state.words)
    const { phoneme_defs } = staticWord

    return (
        <Table>
            {phonemes?.map((phoneme, index) =>
                phoneme.type === keys.letter &&
                <>
                    <div onClick={() => handlePlus(index)} className="header header-plus">+</div>
                    <div className="col">
                        <div className="header">
                            {
                                phoneme.letter_status != keysSourceChanges.insertion ?
                                    <div>
                                        {phoneme.phoneme}
                                        <span dangerouslySetInnerHTML={{ __html: vowelCode?.[phoneme.vowel_code]?.html_code }} />
                                        <span dangerouslySetInnerHTML={{ __html: letterAddOn?.[phoneme.letter_add_on]?.html_code }} />
                                    </div>
                                    :
                                    <input value={phoneme?.phoneme} className="header" maxlength={1} onChange={({ target }) => savePhoneme(target.value, index)} />
                            }
                        </div>
                        <div className="content">
                            <Category
                                type="vowel"
                                phoneme={phoneme}
                                phoneme_defs={phoneme_defs}
                                index={index}
                                items={vowelCode}
                                label="בחר את הניקוד"
                                handleChange={handleClickVowelRow}
                            />
                            <Category
                                type="other"
                                items={letterAddOn}
                                label={"אחר"}
                                index={index}
                                phoneme={phoneme}
                                handleChange={handleClickOtherRow}
                                phoneme_defs={phoneme_defs}
                            />
                            <Category
                                phoneme_defs={phoneme_defs}
                                type="letter"
                                phoneme={phoneme}
                                index={index}
                                items={letterCharacters}
                                label="ברמת אות"
                                handleChange={handleClickLetterRow}
                            />
                            <Category
                                type="clarity"
                                items={clarityCharacters}
                                label="בהירות"
                                phoneme={phoneme}
                                index={index}
                                handleChange={handleClickClarityRow}
                            />
                        </div>
                    </div>
                </>
            )}
            <div >
                <div onClick={() => handlePlus(staticWord.phoneme_defs.length)} className="header header-plus">+</div>
            </div>
        </Table>
    )
}

export default Deciphering