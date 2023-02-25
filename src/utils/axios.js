import axios from "axios";
import { HOST } from "./url";

const defaultOptions = {

  baseURL: `${HOST}`,
  headers: {
    "Content-Type": "application/json",
  },
};

let API = axios.create(defaultOptions);
const TOKEN = JSON.parse(localStorage.getItem("online-canteen"))?.token;

API.interceptors.request.use(function (config) {
  config.headers.Authorization = TOKEN ? `Bearer ${TOKEN}` : "";
  return config;
});

export default API;