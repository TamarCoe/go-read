import axios from "axios"

const saveWord = (word) => {
    return axios.post(`${process.env.REACT_APP_SERVER_PORT}reading_assessment/1/seve_word/`, {
        data: word
    }).then((res) => res)
}

export { saveWord }