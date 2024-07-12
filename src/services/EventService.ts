import axios from "axios";

const apiClient = axios.create ({
    baseURL:'https://my-json-server.typicode.com/MRSMIRROR/331-mock-server',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}