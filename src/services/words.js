import axios from "axios"
import get_results from 'mock/get_results.json'

const getWords = (id) => {
    return axios.get(`${process.env.REACT_APP_SERVER_PORT}reading_assessment/${id}/get_reading_assessment_results`)
        .then(response => {
            return get_results
            // return response.data
        })
        .catch(error => {
            return get_results
        });
}


export { getWords }