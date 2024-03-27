import Phoneme from 'models/VM/Phoneme'

class Word {
    constructor(word) {
        const { phoneme_defs, transcription, status, start_time, end_time, word_def_text, word_def_index } = word

        this.transcription = transcription
        this.status = status
        this.start_time = start_time
        this.end_time = end_time
        this.word_def_text = word_def_text
        this.word_def_index = word_def_index
        this.phoneme_defs = getPhonemes(phoneme_defs)
    }
}

const getPhonemes = (phonemes) => {
    let nPhonemes = []

    phonemes.foreach(phoneme => {
        nPhonemes.push(new Phoneme(phoneme))
    });

    return nPhonemes
}

export default Word