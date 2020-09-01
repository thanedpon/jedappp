import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default() => {
    return axios.create({
        baseURL: 'https://bd67c83f5eeb.ngrok.io'
    })
}


