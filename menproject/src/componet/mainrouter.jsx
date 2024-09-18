import React from 'react'
import Home from '../pages/home'
import Product from '../pages/product'
import Services from '../pages/services'
import Magazine from '../pages/magazine'
import Vitraampus from '../pages/vitraampus'
import Aboutvitra from '../pages/aboutvitra'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Singalepage from '../pages/singalepage'
import {Routes,Route} from 'react-router-dom'
import PrivateRouter from './private'

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
    <Route path='/services' element={<Services/>}> </Route>
    <Route path='/magazine' element={<Magazine/>}></Route>
    <Route path='/vitraampus' element={<Vitraampus/>}></Route>
    <Route path='/aboutvitra' element={<Aboutvitra/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/product/:id' element={<Singalepage/>}></Route>
  </Routes>

    </div>
  )
}

export default Mainrouter