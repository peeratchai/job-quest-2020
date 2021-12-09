import axios from 'axios'

export const getRandomJoke = (formData) => {
    let params
    if (formData) {
        params = `?firstName=${formData.firstName}&lastName=${formData.lastName}`
    } else {
        params = ''
    }
    return axios.get(process.env.REACT_APP_JOKE_API_URL + '/random' + params).then((response) => ({ response })).catch((error) => ({ error }))
}