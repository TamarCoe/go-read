import errorTypes, { errorTypes2 } from "./errorTypes"

const keys = {
    all: "all",
    phoneme: "letter",
    vowel: "vowel",
    word: "word",
    special: "special"
}

const types = [
    {
        id: 0,
        label: "כללי",
        type: keys.all,
        menu: errorTypes
    },
    {
        id: 1,
        label: "אות",
        type: keys.phoneme,
        menu: errorTypes
    },
    {
        id: 2,
        label: "ניקוד",
        type: keys.vowel,
        menu: errorTypes
    },
    {
        id: 3,
        label: "מילה",
        type: "word",
        menu: errorTypes
    },
    {
        id: 4,
        label: "שינוי מבנה",
        type: keys.special,
        menu: errorTypes2
    },
    {
        id: 5,
        label: "מיוחדים",
        type: "yyy",
        disabled: true
    }
]

export default types

export { keys as keysTypes }