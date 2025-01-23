import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://server-qcq5k86ps-mahedy766584s-projects.vercel.app/',
    baseURL: 'http://localhost:5000/',
});

const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;