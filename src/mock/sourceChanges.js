
const keys = {
    insertion: "INSERTION",
    omission: "OMISSION",
    substitution: "SUBSTITUTION",
    selfCorrection: 'SELF-CORRECTION',
    transposition: 'TRANSPOSITION',
    hesitation: 'HESITATION',
    rootInflection: "ROOT_INFLECTION",
    repitition: 'REPITITION',
    na: "N/A",
    stop: 'STOP',
    none: 'NONE'
}

const sourceChanges = {
    [keys.none]: {
        "label": "אין קרטריון",
    },
    [keys.substitution]: {
        "label": "החלפה",
        type: keys.substitution,
        id: 0
    },
    [keys.insertion]: {
        "label": "הוספה",
        type: keys.insertion,
        id: 1
    },
    [keys.omission]: {
        "label": "השמטה",
        type: keys.omission,
        id: 2
    },
    [keys.hesitation]: {
        "label": "היסוס",
        type: keys.hesitation,
        id: 3
    },
    [keys.repitition]: {
        "label": "חזרה",
        id: 4,
        type: keys.repitition
    },
    [keys.selfCorrection]: {
        "label": "תיקון עצמי",
        id: 5,
        type: keys.selfCorrection
    },
    [keys.stop]: {
        "label": "עצירה",
        id: 6,
        type: keys.stop
    },
    [keys.transposition]: {
        type: keys.transposition,
        "label": "סיכול",
        id: 7
    }
}

export default sourceChanges

export { keys as keysSourceChanges }