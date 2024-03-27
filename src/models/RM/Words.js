import Phoneme from 'models/RM/Phoneme'

class Words {

    constructor(staticWord, phonemesSave) {
        const { id, name, text, lexile_level, type, version, word_defs } = staticWord
        this.id = id;
        this.name = name;
        this.text = text;
        this.lexile_level = lexile_level;
        this.type = type;
        this.version = version;
        this.word_defs = getWordRef(word_defs, phonemesSave)
    }
}

const getWordRef = (word_defs, phonemesSave) => {
    const { id, text, index, phoneme_defs } = word_defs
    let nWordDefs = {
        id: id,
        text: text,//I dont know, I need to do this
        index: index
    }
    let nPhoneme_defs = []

    phonemesSave.forEach(phoneme => {
        nPhoneme_defs.push(new Phoneme(phoneme))
    });

    nWordDefs.phoneme_defs = nPhoneme_defs

    return nWordDefs
}

export default Words