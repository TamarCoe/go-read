import React, { useState } from 'react'
import Main from 'components/Diagnosis/Main'

const Context = () => {
    const [record, setRecord] = useState(0)

    const commonState = {
        record,
        setRecord
    }

    return (
        <DiagnosisContext.Provider value={commonState}>
            <Main />
        </DiagnosisContext.Provider>
    )
}

export default Context

export const DiagnosisContext = React.createContext()

