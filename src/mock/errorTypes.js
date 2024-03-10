const keys = {
    insertion: "INSERTION",
    omission: "OMISSION",
    substitution: "SUBSTITUTION",
    selfCorrection: 'SELF-CORRECTION',
    transposition: 'TRANSPOSITION',
    hesitation: 'HESITATION'
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
        color: "#D100F3",
        type: keys.omission,
        bg: "#fae9fe"
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
        color: "#FF8A00",
        type: keys.selfCorrection,
        bg: "#fffaf6"
    },
    {
        id: 5,
        label: "היסוס חזרה",
        color: "#BC4F00",
        type: keys.hesitation,
        bg: "#f8ede7"
    },
    {
        id: 6,
        label: "סיכול",
        color: "#0047FF",
        type: keys.transposition,
        bg: '#f1f4ff'
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

const errorTypes2 = [
    {
        id: 1,
        label: "שינוי תבנית",
        color: "#00C2FF",
        // type: keys.insertion,
        bg: "#F4FCFF"
    },
    {
        id: 2,
        label: "שינוי הטיה",
        color: "#D100F3",
        // type: keys.omission,
        bg: "#fae9fe"
    },
    {
        id: 3,
        label: "שינוי מוספיות",
        color: "#00DE16",
        // type: keys.substitution,
        bg: "#f6fef7"
    }
]

export default errorTypes

export { keys as keysErrors, errorTypes2 }