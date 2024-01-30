import axios from "axios"
import api_url from "../env"

export default function getTabData() {
    const url = api_url + "/tabData"
    return axios.get(url)
}
