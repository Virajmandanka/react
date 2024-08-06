import React from 'react'
import Home from '../pages/home'
import Product from '../pages/product'
import Login from '../pages/login'
import Signup from '../pages/singup'
import { Routes ,Route } from 'react-router-dom'
import PrivateRouter from './Private'


function Mainrouter() {
  return (

    <div>

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={
          <PrivateRouter>
          <Product/>
          </PrivateRouter>
          }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>


    </div>
  )
}

export default Mainrouter