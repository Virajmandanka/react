import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Singalpage() {

  const vi = useParams()
  // console.log(deepak.id)
  const [state,setState] = useState({})
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${vi.id}`)
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
        <div className='box'>
        <img className='im' src={state.image} alt="" width="150px" height="150px"/>
        <h2 className='ti'>{state.title}</h2>
        <h3 className='pr'>₹{state.price}</h3>

        </div>
    </div>
  )
}

export default Singalpage