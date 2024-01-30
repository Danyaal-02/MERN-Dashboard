import axios from 'axios'
import api_url from '../env'

export default function getAllReports() {
    const url = api_url + "/get"
    return axios.get(url)
}
