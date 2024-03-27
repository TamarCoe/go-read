

class Phoneme {

    constructor(nPhoneme) {
        const { phoneme_def, vowel_status, letter_status, id, phoneme, type, index, vowel_code, letter_add_on } = nPhoneme

        this.type = 'LETTER';
        this.index = index;//I dont know index

        this.vowel_status = vowel_status;
        this.letter_status = letter_status;

        this.phoneme = phoneme;
        this.vowel_code = vowel_code && Number(vowel_code);
        this.letter_add_on = letter_add_on && Number(letter_add_on);

        this.phoneme_def = phoneme_def
    }
}

export default Phoneme