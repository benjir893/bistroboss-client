import { useContext } from "react";
import { Authcontext } from "../../Authentication/AuthProvider";


const useAuth = () => {
    const auth = useContext(Authcontext)
    return auth;
};

export default useAuth;