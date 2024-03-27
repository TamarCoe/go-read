const keys = {
    "tracesOfOriginAndReceipt": "tracesOfOriginAndReceipt",
    "consistentAccepted": "consistentAccepted",
    "sourceConsistent": "sourceConsistent",
    "changeCompatibility": "changeCompatibility",
    "changingAffiliationBias": "changingAffiliationBias",
    "timeBiasChange": "timeBiasChange",
    "numberBiasChange": "numberBiasChange",
    "genderBiasChange": "genderBiasChange",
    "changeBodyTilt": "changeBodyTilt",
    "weightPatternChange": "weightPatternChange",
    "changePatternBuilding": "changePatternBuilding",
    "meaningful": "meaningful",
    "meaningless": "meaningless",
    "sameCategory": "sameCategory",
    "aurallySimilar": "Aurally similar",
    "visuallySimilar": "visuallySimilar",
    "synonymSubstitution": "synonymSubstitution"
}

const meetsCriterion = {
    [keys.visuallySimilar]: {
        type: keys.visuallySimilar,
        id: 0,
        "label": "דומה חזותית"
    },
    [keys.aurallySimilar]: {
        "label": "דומה שמיעתית",
        id: 1,
        type: keys.aurallySimilar
    },
    [keys.synonymSubstitution]: {
        id: 2,
        type: keys.synonymSubstitution,
        "label": "מילה נרדפת"
    },
    [keys.sameCategory]: {
        type: keys.sameCategory,
        id: 3,
        "label": "מאותה קטגורייה"
    },
    [keys.meaningless]: {
        type: keys.meaningless,
        id: 4,
        "label": "חסר משמעות"
    },
    [keys.meaningful]: {
        "label": "בעלת משמעות",
        type: keys.meaningful,
        id: 5
    },
    [keys.changePatternBuilding]: {
        type: keys.changePatternBuilding,
        id: 6,
        "label": "שינוי תבנית - בנין"
    },
    [keys.weightPatternChange]: {
        type: keys.weightPatternChange,
        id: 7,
        "label": "שינוי תבנית - משקל"
    },
    [keys.changeBodyTilt]: {
        "label": "שינוי הטיה - גוף",
        id: 8,
        type: keys.changeBodyTilt
    },
    [keys.genderBiasChange]: {
        id: 9,
        type: keys.genderBiasChange,
        "label": "שינוי הטיה - מין"
    },
    [keys.numberBiasChange]: {
        "label": "שינוי הטיה - מספר",
        type: keys.numberBiasChange,
        id: 10
    },
    [keys.timeBiasChange]: {
        "label": "שינוי הטיה - זמן",
        type: keys.timeBiasChange,
        id: 11
    },
    [keys.changingAffiliationBias]: {
        "label": "שינוי הטיה - שייכות",
        type: keys.changingAffiliationBias,
        id: 12
    },
    [keys.changeCompatibility]: {
        "label": "שינוי מוספיות",
        type: keys.changeCompatibility,
        id: 13
    },
    [keys.sourceConsistent]: {
        "label": "עקבי - מקור",
        type: keys.sourceConsistent,
        id: 14
    },
    [keys.consistentAccepted]: {
        "label": "עקבי - התקבל",
        type: keys.consistentAccepted,
        id: 15
    },
    [keys.tracesOfOriginAndReceipt]: {
        type: keys.tracesOfOriginAndReceipt,
        id: 16,
        "label": "עקבי מקור והתקבל"
    }
}

export default meetsCriterion
