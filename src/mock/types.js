const keys = {
    all: "all",
    phoneme: "letter",
    vowel: "vowel",
    word: "word"
}

const types = [
    {
        id: 0,
        label: "כללי",
        type: keys.all
    },
    {
        id: 1,
        label: "אות",
        type: keys.phoneme
    },
    {
        id: 2,
        label: "ניקוד",
        type: keys.vowel
    },
    {
        id: 3,
        label: "מילה",
        type: "word"
    },
    {
        id: 4,
        label: "שינוי מבנה",
        type: "xxx",
        disabled: true
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