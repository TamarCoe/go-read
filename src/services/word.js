import axios from "axios"
import get_results from 'mock/get_results'

const saveWord = (id =3, word) => {
    return axios.post(`${process.env.REACT_APP_SERVER_PORT}assessment/${3}/save_word/`, {
        ...word
    })
        .then(response => {
            return response.data
        })
        .catch(error => {
            return null
        });
}

export { saveWord }