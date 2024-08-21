import axios from "axios";

export default function getTabData() {
    const api_url = import.meta.env.VITE_API_URL;
    const url = `${api_url}/tabData`;
    return axios.get(url);
}
