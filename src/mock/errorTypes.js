const keys = {
    insertion: "INSERTION",
    omission: "OMISSION",
    substitution: "SUBSTITUTION"
}

const errorTypes = [
    {
        id: 1,
        label: "הוספה",
        color: "#00C2FF",
        type: keys.insertion,
        bg: "#F4FCFF"
    },
    {
        id: 2,
        label: "השמטה",
        color: "#FF8A00",
        type: keys.omission,
        bg: "#fffaf6"
    },
    {
        id: 3,
        label: "החלפה",
        color: "#00DE16",
        type: keys.substitution,
        bg: "#f6fef7"
    },
    {
        id: 4,
        label: "תיקון עצמי",
        color: "#D100F3",
        type: "self-correction",
        disabled: true
    },
    {
        id: 5,
        label: "היסוס חזרה",
        color: "#FF5858",
        type: "repitition",
        disabled: true
    },
    {
        id: 6,
        label: "סיכול",
        color: "#0047FF",
        type: "transposition",
        disabled: true
    },
    // {
    //     id: 7,
    //     label: "טעות אות",
    //     color: "#BC4F00",
    //     type: "b"
    // },
    // {
    //     id: 8,
    //     label: "תיקון עצמי",
    //     color: "#FFE500",
    //     type: "b"
    // }
]

export default errorTypes

export { keys as keysErrors }