

const otherCharacters = {
    1: {
        //שין
        id: 1,
        label: "שׁ",
        ascii: "U+05C1",
        html: <span>&#1473;</span>
    },
    2: {
        id: 2,
        label: "שׂ",
        ascii: "U+05C2",
        html: <span>&#1474;</span>
    },
    3: {
        id: 3,
        label: "דגש",
        ascii: "U+05BC",
        html: <span>&#1468;</span>
    },
    4: {
        id: 4,
        label: "ללא דגש",
        ascii: null,
        html: null
    },
    5: {
        id: 5,
        label: "גרש",
        ascii: "U+05F3",
        html: <span>&#1523;</span>
    },
    6: {
        id: 6,
        label: "ללא גרש",
        ascii: null,
        html: null
    }
}

const asciiCharacters = [
    [
        otherCharacters["1"],
        otherCharacters["2"]
    ],
    [
        otherCharacters["3"],
        otherCharacters["4"]
    ],
    [
        otherCharacters["5"],
        otherCharacters["6"]
    ]
]

export { asciiCharacters, otherCharacters }