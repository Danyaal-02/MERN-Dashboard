import axios from "axios";

export default function getReports(body) {
    const api_url = import.meta.env.VITE_API_URL;
    const url = `${api_url}/get/query`;
    return axios.post(url, body);
}
