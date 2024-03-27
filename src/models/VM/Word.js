
class Word {
    constructor(word) {
        const { phoneme_defs, index, text, status = 'CORRECT' } = word

        this.status = status
        this.word_def_text = text
        this.word_def_index = index
        this.phonemes = phoneme_defs
    }
}

// const getPhonemes = (phonemes) => {
//     let nPhonemes = []

//     phonemes.foreach(phoneme => {
//         nPhonemes.push(new Phoneme(phoneme))
//     });

//     return nPhonemes
// }

export default Word