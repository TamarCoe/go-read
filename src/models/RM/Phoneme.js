

class Phoneme {

    constructor(nPhoneme) {
        const { phoneme_def, vowel_status = 'CORRECT', letter_status = 'CORRECT', id, letter, type, index = 1, vowel_code, letter_add_on } = nPhoneme

        this.id = id
        this.type = 'LETTER';
        this.index = 1;//I dont know index

        this.vowel_status = vowel_status;
        this.letter_status = letter_status;

        this.letter = letter;
        this.vowel_code = vowel_code && Number(vowel_code);
        this.letter_add_on = letter_add_on && Number(letter_add_on);

        this.phoneme_def = phoneme_def
    }
}

export default Phoneme