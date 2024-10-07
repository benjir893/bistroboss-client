import { createContext, useEffect, useState } from "react";
import { app } from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Pages/hooks/useAxiosPublic";

const auth = getAuth(app)
export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    const Axiospublic = useAxiosPublic();

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
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateuserinfo = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userEmail = { email: currentUser.email };
                Axiospublic.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data.token) { 
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else
            {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => { return unsubscribed(); }
    }, [Axiospublic])
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