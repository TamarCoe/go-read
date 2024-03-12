const scoring = [
    {
        "id": 0,
        "label": "(ַ/ ָ ) קמץ / פתח"
    },
    {
        "id": 1,
        "label": "(ֶ/ ֵ) צירה / סגול"
    },
    {
        "id": 2,
        "label": "חיריק"
    },
    {
        "id": 3,
        "label": "(וֹ/ ֹ) חולם"
    },
    {
        "id": 4,
        "label": "(וּ/ ֻ) שורוק / קובוץ"
    },
    {
        "id": 5,
        "label": "קמץ קטן"
    },
    {
        "id": 6,
        "label": "שווא / עיצור"
    },
    {
        "id": 7,
        "label": "עיצור מתנועה מלאה"
    },
    {
        "id": 8,
        "label": "נחה"
    },
    {
        "id": 9,
        "label": "חַ-פתח גנובה"
    }
]

const other = [
    {
        "id": 0,
        "label": "(שׁ/ שׂ) החלפת ש"
    },
    {
        "id": 1,
        "label": "דגש"
    },
    {
        "id": 2,
        "label": "גרש"
    }
]

const letterLevel = [
    {
        id: 0,
        label: "החלפת אות"
    },
    {
        id: 1,
        label: "השמטה"
    },
    {
        id: 2,
        label: "לא נקרא"
    }
]


const clarity = [
    {
        id: 0,
        label: "אות לא ברור"
    },
    {
        id: 1,
        label: "ניקוד לא ברור"
    }
]

const transliterationItems = [
    {
        id: 0,
        label: "בחר את הניקוד",
        items: scoring
    },
    {
        id: 1,
        label: "אחר",
        items: other
    },
    {
        id: 2,
        label: "ברמת אות",
        items: letterLevel
    },
    {
        id: 3,
        label: "בהירות",
        items: clarity
    }
]

export { transliterationItems, scoring, other, clarity, letterLevel }