import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http:/localhost:5000/api/v1/",
    timeout: 10000
})

axiosInstance.interceptors.request.use(() => {

})
axiosInstance.interceptors.response.use(() => { }, () => { })


export default axiosInstance;