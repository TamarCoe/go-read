import React, { useState, useEffect, useContext } from "react";
import Upload from "./UploadButton";
import { Context } from "components/Main/Context";

var a;
const AudioPlay = () => {
    const [buttonName, setButtonName] = useState("Play");
    const [audio, setAudio] = useState();
    const { setRecord, record } = useContext(Context)

    const addFile = (e) => {
        setRecord(null)
        if (e.target.files[0]) {
            setRecord({ ...record, recording_url_file: URL.createObjectURL(e.target.files[0]) });
        }
    };

    return (
        <Upload disabled={!record} handleChange={addFile} title={"העלאת הקלטה"} />
    );
};

export default AudioPlay;
