import axios from "axios"
import { hebrewCharacters } from "mock/hebrewCharacters"
import { otherCharacters } from "mock/otherCharacters"
import words from 'mock/words'

const convertArray = (array) => {
    const nObj = {}
    array.forEach((item, index) => {
        Object.keys(item).forEach((key) =>
            nObj[key] = item[key]
        )
    });
    return nObj
}

const getVowelCode = () => {
    return axios.get(`${process.env.REACT_APP_SERVER_PORT}vowel_codes`)
        .then(response => {
            return convertArray(response.data);
            // return hebrewCharacters
        })
        .catch(error => {
            console.error(error);
        });
}

const getLetterAddOn = async () => {
    return axios.get(`${process.env.REACT_APP_SERVER_PORT}letter_add_ons`)
        .then(response => {
            return convertArray(response.data);
            // return otherCharacters
        })
        .catch(error => {
            console.error(error);
        });
}

const getStatisWords = (id) => {
    // return words
    return axios.get(`${process.env.REACT_APP_SERVER_PORT}assessment/${id}/get_definitions`)
        .then(response => {
            // return words
            return response.data
        })
        .catch(error => {
            return null
        });
}

export { getStatisWords, getVowelCode, getLetterAddOn }