
import React, { children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let isLogin=localStorage.getItem('Login')
    return (
        <>
         {
            isLogin ? children : <Navigate to={"/Login"}/>
        }
        </>
       
    );
}

export default PrivateRoute;