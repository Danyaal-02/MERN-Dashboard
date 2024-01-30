import api_url from "../env";
import axios from "axios"

export default function getReports(body) {
    const url = api_url + "/get/query"
    return axios.post(url, body)
}
