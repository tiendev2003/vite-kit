import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const httpRequest = axios.create({
    baseURL: BASE_URL + '/api/v1',
    withCredentials: true
});

export default httpRequest;
