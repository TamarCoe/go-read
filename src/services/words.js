import axios from "axios"
import get_results from 'mock/get_results.json'

const getWords = (id =3) => {
    return axios.get(`${process.env.REACT_APP_SERVER_PORT}assessment/${3}/get_results/`)
        .then(response => {
            // return get_results
            return response.data
        })
        .catch(error => {
            return null
            // return get_results
        });
}


export { getWords }