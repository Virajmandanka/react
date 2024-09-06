// import React from 'react'
// import Dshboard from '../pages/Dshboard'
import Dshboard from '../pages/Dshboard'
import Products from '../pages/Products'
import Users from '../pages/Users'
import Addproducts from '../pages/addproducts'
import Logout from '../pages/logout'
import {Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'



function Navbar1() {

  return (

    <div>
      <div className='men'>
     <div className='he'>
     <Link className='tt' to="/">Dshboard</Link>
     <Link className='tt' to="/products">Products</Link>
     <Link className='tt' to="/users">Users</Link>
     <Link className='tt' to="/addproducts">Addproducts</Link>
     <Link className='tt' to="/logout">Logout</Link>
     </div>
    
    
    <div className='gg'> 

        
    <Routes>

<Route path='/' element={<Dshboard/>}></Route>
<Route path='/products' element={<Products/>}></Route>

<Route path='/users' element={<Users/>}></Route>
<Route path='/addproducts/id:?' element={<Addproducts/>}></Route>
<Route path='/addproducts' element={<Addproducts/>}></Route>
<Route path='/' element={<Products/>}></Route>
<Route path='/logout' element={<Logout/>}></Route>


    </Routes>

    </div>

    </div>

    </div>

     

  )
}

export default Navbar1