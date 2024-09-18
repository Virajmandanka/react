import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Singalepage() {
  
    const vi = useParams()
  // console.log(deepak.id)
  const [state,setState] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:3000/img/${vi.id}`)
    .then((res)=>res.json())
    .then((res)=>{
       setState(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
    <div className="single-page-container">
    <div className='box'>
        <img className='im' src={state.image} alt="" width="150px" height="150px"/>
        <p>{state.id}</p>
        <h2 className='ti'>{state.title}</h2>
        <h3 className='pr'>₹{state.price}</h3>

        </div>
        </div>


        <footer className='f1'>

        <div className='box6'>
            <button className='b4'>Products</button>
            <button className='b5'> All Products</button>
            <button className='b5'>NEW product</button>
            <button className='b5'>Desiner</button>
            <button className='b5'>Manufacture warranty</button>
            <button className='b5'>Colours & materials</button>

            <button className='b6'>Professional</button>
            <button className='b5'>Downloads</button>
            <button className='b5'>Project</button>
            <button className='b5'>Our Clients</button>
            <button className='b5'>Tools</button>
        </div>

        <div className='box6'>

        <button className='b4'>About Vitra</button>
        <button className='b5'>Fact</button>
        <button className='b5'>Vitra cumpus</button>
        <button className='b5'>Sustainability</button>
        <button className='b5'>Magazine</button>
        <button className='b5'>Jobs & Careers</button>
        <button className='b5'>Press</button>

        <p className='q11'>
        <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-linkedin"></i>&nbsp;
        </p>

        <p className='q12'>COPYRIGHT © 2024 VITRA INTERNATIONAL AG<br/>cookie Setting</p>
        
       <div className='hh'>
       <a  href="#top">Up</a>
       </div>
        

        </div>

        <div className='box6'>
        <button className='b4'>Contact</button>
        <button className='b5'>Contact vitra</button>
        <button className='b5'>Find vitra</button>
        <button className='b5'>Vitra Companies</button>
        <button className='b5'>Subscribe to the  newsletter</button>
        <button className='b5'>Vitra Circle Stores</button>

        <button className='b6'>Legal</button>
        <button className='b5'>Dristibution</button>
        <button className='b5'>Imprint</button>
        <button className='b5'>Privacy Policy</button>
        </div>

     </footer>


    </div>
  )
}

export default Singalepage