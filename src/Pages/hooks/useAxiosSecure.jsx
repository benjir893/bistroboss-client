import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

 const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {logout} =useAuth();
    const navigate = useNavigate();
    // request interseptor to add authorization header for every secure call
    AxiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('stopped by interseptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        // to do something with error request
        return Promise.reject(error)
    });
    AxiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const errorstatus = error.response.status
        // console.log('status error in the interseptor',errorstatus)
        // for error 401 and 403 logout user and dictate to login page using login router
        if(errorstatus === 401 || errorstatus === 403){
            await logout();
            navigate('/login')

        }
        return Promise.reject(error);
    })
    return AxiosSecure ;
};

export default useAxiosSecure;