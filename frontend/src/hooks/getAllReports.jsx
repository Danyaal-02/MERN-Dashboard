import axios from 'axios';

export default function getAllReports() {
    const api_url = import.meta.env.VITE_API_URL;
    const url = `${api_url}/get`;
    return axios.get(url);
}
