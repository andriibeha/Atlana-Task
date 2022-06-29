import axios, { AxiosInstance } from 'axios';
import {Octokit} from 'octokit'


 const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
 })




 export default axiosInstance