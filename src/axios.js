import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-93c15/us-central1/api' // THE API (cloud function) URL 7:03:22
});

export default instance;