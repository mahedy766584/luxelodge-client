import axios from "axios";

const instance = axios.create({
    baseURL: 'https://server-seven-ashen.vercel.app/',
    // baseURL: 'http://localhost:5000/',
});

const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;