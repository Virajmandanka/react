// import React, { children } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRouter({children}) {

    const isLogin = localStorage.getItem('login');

    return (
      isLogin ? children : <Navigate to="/login" />
    );
}

export default PrivateRouter