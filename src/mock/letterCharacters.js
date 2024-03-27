import { keysSourceChanges } from "./sourceChanges"

const letterCharacters = {
    1: {
        id: 1,
        name: "החלפת אות",
        status: keysSourceChanges.substitution,
        input: true,
        action: (phoneme, vowel, staticPhoneme) => {
            if (phoneme?.phoneme_def_letter) {
                let nPhonemeSave = { ...phoneme }
                phoneme.letter_status = vowel.status
                phoneme.phoneme_def = staticPhoneme.id
                phoneme.phoneme_def_letter = phoneme.phoneme_def_letter || phoneme.phoneme
                return nPhonemeSave
            }
        }
    },
    2: {
        id: 2,
        name: "השמטה",
        status: keysSourceChanges.omission,
        action: (phoneme, vowel, staticPhoneme) => {

            let nPhonemeSave = { ...phoneme }
            if (phoneme?.phoneme_def)
                if (phoneme.letter_status === keysSourceChanges.omission) {
                    nPhonemeSave.letter_status = null
                    nPhonemeSave.vowel_status = null
                    nPhonemeSave.phoneme_def = null
                }
                else {
                    nPhonemeSave.letter_status = keysSourceChanges.omission
                    nPhonemeSave.vowel_status = keysSourceChanges.omission
                    nPhonemeSave.phoneme_def = staticPhoneme.id
                    phoneme.phoneme_def_letter = phoneme.phoneme_def_letter || phoneme.phoneme
                    phoneme.phoneme_def_letter_add_on = phoneme.phoneme_def_letter_add_on || phoneme.letter_and_on
                    phoneme.phoneme_def_vowel_code = phoneme.phoneme_def_vowel_code || phoneme.vowel_code
                }
            return nPhonemeSave
        }
    }
}

export { letterCharacters }