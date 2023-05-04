import axios from 'axios';
import {useRouter} from "vue-router";
export const BASE_URL = '//localhost:3000';
import { ROUTE_NAMES } from "../router/routeNames";
const axiosConfig  = {
    baseURL:BASE_URL
}
const axiosInstance = axios.create(axiosConfig);
export const api = axiosInstance;



// const axiosConfig  = {
//     baseURL: API_BASE_URL,
//     withCredentials: true
// };

// const axiosInstance = axios.create(axiosConfig);
// export const getRelevantSession = () => {
//     return localStorage.getItem(`session`);
// };
// function requestInterceptor (config) {
//     config.headers.Authorization = getRelevantSession();
//     return config;
// }
// export const successResponseInterceptor = (response) => Promise.resolve(response.data ?? []);
// export const errorResponseInterceptor = async (error) => {
//     const router = useRouter();
//     if(error.status === 401) {
//         await router.push({
//             name: ROUTE_NAMES.R_ROOT_LOGIN
//         });
//     }
//     throw error;
// }

// axiosInstance.interceptors.request.use((config) => requestInterceptor(config));
// axiosInstance.interceptors.response.use(
//     (response) => successResponseInterceptor(response),
//     (error) => errorResponseInterceptor(error),
// );

// export const api = axiosInstance;