import axios from 'axios';
import { baseURL } from '../constants';

const API = axios.create({
    baseURL,
    headers: {
        'content-type' : 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
});

export default API;