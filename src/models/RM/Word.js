import Phoneme from 'models/RM/Phoneme'
import { map } from 'lodash'
import { sequence } from 'hebrew-transliteration'

class Word {

    constructor(staticWord, phonemes, vowelCodes, letterAddOns) {
        const { id, text, index, errors } = staticWord

        this.word_def = id;

        let nTranscription = ''
        let flagCheckStatus = false

        phonemes.map((nPhoneme) => {
            const { phoneme, vowel_code, letter_add_on, vowel_status = 'CORRECT', letter_stauts = 'CORRECT' } = nPhoneme

            nTranscription += phoneme
            if (vowel_code) {
                nTranscription += vowelCodes[vowel_code].ascii_code
            }
            if (letter_add_on) {
                nTranscription += letterAddOns[letter_add_on].ascii_code
            }
            if (vowel_status != 'CORRECT' || letter_stauts != 'CORRECT')
                flagCheckStatus = true
        })

        if (flagCheckStatus) {
            this.transcription = sequence(nTranscription);//I dont know
            this.status = 'INCOREECT'
            this.errors = errors
            this.phonemes = getPhoneme_defs(phonemes)
        }
        else
            this.status = 'CORRECT'

        // this.index = index//I dont know but Tami said it isnt important
    }
}

const getPhoneme_defs = (phonemesSave) => {
    let nPhoneme_defs = []

    phonemesSave.forEach(phoneme => {
        nPhoneme_defs.push(new Phoneme(phoneme))
    });

    return nPhoneme_defs
}

export default Word