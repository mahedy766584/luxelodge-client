import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/',
});

const useAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('request sopped byh interceptors ------->', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            handleLogOut();
            navigate('/signIn');
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;