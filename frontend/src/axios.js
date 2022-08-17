import axios from "axios";
import { getCookie } from "./cookie";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie('userid')}`
    },
    withCredentials : true,
});

export default API;