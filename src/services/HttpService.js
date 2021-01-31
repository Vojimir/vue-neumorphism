import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

export class HttpService {
    constructor() {
        this.configureAxios(
            BASE_URL,
            {
                accept: 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        )
        this.axios = axios
    }

    configureAxios(baseUrl, headers = {}) {
        axios.defaults.baseURL = baseUrl
        Object.assign(

            axios.defaults.headers.common,
            headers
        )
    }


}