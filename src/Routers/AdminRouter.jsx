import React from 'react';
import useAuth from '../Pages/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Pages/hooks/useAdmin';

const AdminRouter = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>
    
};

export default AdminRouter;