import axios from "axios";

export default function getChartData() {
    const api_url = import.meta.env.VITE_API_URL;
    const url = `${api_url}/chartData`; 
    return axios.get(url);
}
