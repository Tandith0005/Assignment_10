import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if (!loading && !user) {
            Swal.fire({
                icon: "error",
                title: "Login First",
                html: '<a href="/login" style="color: #007bff; text-decoration: underline;">Click here to LOGIN</a>',
              });
            navigate('/')
        }
    },[user,loading, navigate])
    
    return (
        loading ? <span className="loading loading-bars text-secondary w-[100px] h-screen ml-[800px]"></span> : (user ? children : null)
    );
};

export default PrivateRoute;