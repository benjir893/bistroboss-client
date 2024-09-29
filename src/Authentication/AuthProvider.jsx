import { createContext, useEffect, useState } from "react";
import { app } from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";

const auth = getAuth(app)
export const Authcontext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginwithgoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)

    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateuserinfo = (name, url)=>{
        return updateProfile (auth.currentUser,{
            displayName:name, photoURL:url
        })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => { return unsubscribed(); }
    }, [])
    const authinfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginwithgoogle,
        logout,
        updateuserinfo
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;