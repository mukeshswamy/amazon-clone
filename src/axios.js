import axios from "axios";

const instance = axios.create({
    baseURL: '...' // THE API (cloud function) URL 7:03:22
});

export default instance;