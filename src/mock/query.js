import { map } from 'lodash'
import sourceChanges from './sourceChanges'
import meetsCriterion from './meetsCriterion'

const query = {
    "if_done": map(sourceChanges),
    "from_speech_unit": [
        {
            "label": "הכל"
        },
        {
            "label": "אות"
        },
        {
            "label": "ניקוד"
        },
        {
            "label": "צירוף"
        },
        {
            "label": "מילה"
        },
        {
            "label": "יחדת תחבירית"
        },
        {
            "label": "משפט"
        }
    ],
    "to_speech_unit": [
        {
            "label": "הכל"
        },
        {
            "label": "אות"
        },
        {
            "label": "ניקוד"
        },
        {
            "label": "צירוף"
        },
        {
            "label": "מילה"
        },
        {
            "label": "יחדת תחבירית"
        },
        {
            "label": "משפט"
        }
    ],
    "meets_the_criteria": map(meetsCriterion),
    "according_to_sensitivity": [
        {
            "label": "גאוס (התפלגות נורמלית) מצטבר"
        },
        {
            "label": "נורמה"
        },
        {
            "label": "מותאם אישית"
        }
    ],
    "indication": [
        {
            "label": "אותיות"
        },
        {
            "label": "תנועות"
        },
        {
            "label": "חזותי"
        },
        {
            "label": "שליפה"
        },
        {
            "label": "רגשי"
        },
        {
            "label": "מורפולוגי"
        },
        {
            "label": "אוצר מילים"
        },
        {
            "label": "הבנת הנשמע"
        },
        {
            "label": "הבנת הנקרא"
        },
        {
            "label": "קצב"
        },
        {
            "label": "דיוק"
        },
        {
            "label": "זכרון עבודה"
        },
        {
            "label": "זכרון לטווח קצר"
        },
        {
            "label": "עכבה"
        },
        {
            "label": "בקרה"
        },
        {
            "label": "עיבוד שמיעתי"
        },
        {
            "label": "קשב"
        }
    ]
}

export default query