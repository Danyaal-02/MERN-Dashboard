import axios from "axios"
import api_url from "../env"

export default function getChartData() {
    const url = api_url + "/chartData"
    return axios.get(url)
}
