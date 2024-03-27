

class Phoneme {

    constructor(nPhoneme) {
        const { phoneme_def, vowel_status, letter_status, id, phoneme, type, index, vowel_code, letter_add_on } = nPhoneme

        this.phoneme_def = phoneme_def;
        this.type = 'LETTER';
        this.index = index;//I dont know index

        this.vowel_status = vowel_status;
        this.letter_status = letter_status;

        this.phoneme = phoneme;
        this.vowel_code = vowel_code;
        this.letter_add_on = letter_add_on;

        this.phoneme_def_letter = phoneme_def_letter;
        this.phoneme_def_letter_add_on = phoneme_def_letter_add_on;
        this.phoneme_def_vowel_code = phoneme_def_vowel_code;
    }
}

export default Phoneme