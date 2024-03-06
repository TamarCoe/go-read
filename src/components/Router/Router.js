import React, { useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import Details from 'components/Details/Main'
import Diagnosis from "components/Diagnosis/Main";
import Brain from 'components/Brain/Main'
import Query from "components/Query";
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Context } from "components/Main/Context";

const CreateRouter = () => {
    const { record } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (!record) navigate('/')
    }, [])

    return (
        <Routes>
            {record &&
                <>
                    <Route path="/details" element={<Details />} />
                    <Route path="/brain" element={<Brain />} />
                    <Route path="/query" element={<Query />} />
                </>
            }

            <Route path="/" element={<Diagnosis />} />

        </Routes>
    );
}

export default CreateRouter
