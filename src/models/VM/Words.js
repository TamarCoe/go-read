import Word from 'models/VM/Phoneme'

class Words {

    constructor(staticWords, currentWords) {
        const { words, reading_assessment_text, reading_assessment_name, deletion_count, overall_score_count, correct_count, insertion_count, substitution_count, num_differences_count, time_intervals_count, phonemes_decoded_count, duration, user_name, reading_assessment_def, audio_file } = currentWords
        const { word_defs } = staticWords

        this.user_name = user_name
        this.reading_assessment_def = reading_assessment_def
        this.audio_file = audio_file
        this.duration = duration
        this.phonemes_decoded_count = phonemes_decoded_count
        this.time_intervals_count = time_intervals_count
        this.num_differences_count = num_differences_count
        this.substitution_count = substitution_count
        this.insertion_count = insertion_count
        this.correct_count = correct_count
        this.overall_score_count = overall_score_count
        this.deletion_count = deletion_count
        this.reading_assessment_name = reading_assessment_name
        this.reading_assessment_text = reading_assessment_text
        this.words = getWords(word_defs, words)
    }
}

const getWords = (word_defs, words) => {
    nWords = []

    words.forEach(word => {
        let newWord
        if (word.status === 'CORRECT') {
            newWord = word_defs.findIndex((nWord) => nWord.id === word.phoneme_def)
        }
        nWords.push(new Word(newWord || word))
    });

    return nWords
}

export default Words