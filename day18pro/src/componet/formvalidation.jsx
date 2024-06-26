import { useState } from "react"
import Swal from 'sweetalert2'


function Login() {

  const [state,setState] = useState("Logined")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [Lemail,setLEmail] = useState("")
  const [Lpass,setLPass] = useState("")
  const [arr,setArr] = useState([])

  const handleClick = ()=>
    {
      let obj = {

        username : name,
        email : email,
        password : pass
      }

      setArr([...arr,obj])

      setState("Login")



    }
    console.log(arr)

    const handleLogin = ()=>{
const data=arr.filter((el)=>el.email===Lemail && el.password===Lpass)
if(data.length>0)
     {
      Swal.fire({
        title: "success",
        text: "You clicked the button!",
        icon: "success"
      });
     }
     else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
     
      });
     }
    }

    const bler=(e)=>{

        const { value } = e.target;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            e.target.style.border = "2px solid red";
            alert("Please enter a valid email address.");
        } 
        else {
            e.target.style.border = "";
        }
            
        
    }

    const handlePasswordBlur = (e) => {
        const { value } = e.target;
        const minLength = 8;
        if (value.length < minLength) {
            e.target.style.border = "2px solid red";
            alert(`Password must be at least ${minLength} characters long.`);
        } 
        else {
            e.target.style.border = "";
        }
    };

    
  return (
    <div>
        
      {state == "Login" ? 
      
      <div className='men2'>

      <h1 className='d2'>Login</h1>

      <input className='in4' type="text" placeholder='  Enter you Email' onChange={(e)=>setLEmail(e.target.value)} />
      <input className='in5' type="text" placeholder='  Enter you Password' onChange={(e)=>setLPass(e.target.value)} /><br/>
      <button  className='btn2' type='button' onClick={handleLogin}>Login</button>
      <p className='q2' onClick={()=>setState("Signup")}>New account</p>

      </div>
      
      :
      
      
       <div>

      <div className='men'>

      <h1 className='d'>Signup</h1>

      <input className='in' type="text" placeholder='  Enter you username' onChange={(e)=>setName(e.target.value)} />
      <input className='in1' type="text" placeholder='  Enter you Email' onBlur={bler}  onChange={(e)=>setEmail(e.target.value)} />
      <input className='in2' type="text" placeholder='  Enter you Passwoed' onBlur={handlePasswordBlur} onChange={(e)=>setPass(e.target.value)} /><br/>
      <button className='btn1' type='button' onClick={handleClick}>Signup</button>
      <p className='q1' onClick={()=>setState("Login")}>Create another account ? login</p>


      </div>

      </div>
      
      
      }


    </div>
  )
}

export default Login