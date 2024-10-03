import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Sociallogin = () => {
    const { loginwithgoogle } = useAuth();
    const axiospublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()

    const handleLoginwithGoogle = () => {
        loginwithgoogle()
            .then(result => {
                console.log(result.user)
                const userinfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL

                }
                axiospublic.post('/user', userinfo)
                .then(res =>{
                    console.log(res.data)
                    navigate('/')
                })
            })
            
    }
    return (
        <div className="">
            <div className="divider"></div>
            <div className="p-4 text-center">
                <button onClick={handleLoginwithGoogle} className="btn btn-outline btn-secondary">Log in with <FaGoogle />oogle</button>
            </div>
        </div>
    );
};

export default Sociallogin;