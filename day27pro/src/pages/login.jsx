
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [state,setState] = useState({
        email : "",
        password : ""
    })
    const nevala = useNavigate()
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(state.email){
            fetch(`http://localhost:3022/users?email=${state.email}`)
            .then(res=>res.json())
            .then((res)=>{
               if(res.length>0){
                   if(res[0].password == state.password){
                      alert("Login Successfull")
                      localStorage.setItem("login", 'true')
                      nevala("/product")
                   }else{
                      alert("Password Mismatch")
                   }
               }else{
                 alert("Register first")
               }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
  return (
    <div>
         <div className="container">
         <form onSubmit={handleSubmit} className="form">
         <h1 className="form-title">Login</h1>
            <input type="text" className="input" name='email' value={state.email} placeholder='Email Id' onChange={handleChange} />
            <input type="text" className="input" name='password' value={state.password} placeholder='Password' onChange={handleChange} />
            <input type="Submit" className="submitButton"/>

        </form>
        </div>
    </div>
  )
}

export default Login