

const hebrewCharacters = {
    
    1: {
        id: 1,
        label: "קמץ",
        ascii: "U+05B8",
        html: <span>&#1464;</span>
    },
    2: {
        id: 2,
        label: "פתח",
        ascii: "U+05B7",
        html: <span>&#1463;</span>
    },
    3: {
        id: 3,
        label: "חיריק",
        ascii: "U+05B4",
        html: <span>&#1460;</span>
    },
    4: {
        id: 4,
        label: "צירה",
        ascii: "U+05B5",
        html: <span>&#1461;</span>
    },
    5: {

        id: 5,
        label: "סגול",
        ascii: "U+05B6",
        html: <span>&#1462;</span>
    },
    6: {
        id: 6,
        label: "חולם",
        ascii: "U+05B9",
        html: <span>&#1465;</span>
    },
    7: {
        id: 7,
        label: "שורוק",
        ascii: "U+05BA",
        html: <span>&#1466;</span>,
        disabled: (phoneme) => {
            return phoneme.phoneme != 'ו'
        }
    },
    8: {
        id: 8,
        label: "קובוץ",
        ascii: null,//todo
        html: <span></span>//todo
    },
    9: {
        id: 9,
        label: "שווא",
        ascii: "U+05B0",
        html: <span>&#1456;</span>
    },
    10: {
        id: 10,
        label: "עיצור",
        ascii: null,
        html: null
    },
    11: {
        id: 11,
        label: "עיצור מתנועה מלאה",
        ascii: null,
        html: <span></span>
    },
    12: {
        id: 12,
        label: "נחה",
        ascii: null,
        html: <span></span>
    },
    13: {
        id: 13,
        label: "חַ-פתח גנובה",
        ascii: "U+05B7",
        html: <span>&#1463;</span>,
        disabled: (items, index) => {
            return false
        }
    },
    14: {
        id: 14,
        label: "קמץ קטן",
        ascii: "U+05B8",
        html: <span>&#1464;</span>
    }
}

const asciiCharacters = [
    [
        hebrewCharacters["1"],
        hebrewCharacters["2"]
    ],
    [
        hebrewCharacters["4"],
        hebrewCharacters["5"]
    ],
    hebrewCharacters["3"],//חיריק
    hebrewCharacters["6"],//חולם
    [
        hebrewCharacters["7"],//שורוק
        hebrewCharacters["8"]//קובוץ
    ],
    [
        hebrewCharacters["9"],//שווא
        hebrewCharacters["10"]//עיצור
    ],
    hebrewCharacters["11"],//עיצור מתנועה מלאה
    hebrewCharacters["12"],//נחה
    hebrewCharacters["13"],//פתח גנובה
    hebrewCharacters["14"],//קמץ קטן

]

export { asciiCharacters, hebrewCharacters }