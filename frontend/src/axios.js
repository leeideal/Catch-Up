import axios from "axios";
import { getCookie } from "./cookie";

export const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers:{
        "Content-Type": "application/json",
    },
});

export const LogAPI = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers:{
        "Content-Type": "application/json",
        Authorization: `${getCookie('userid')}`
    },
});