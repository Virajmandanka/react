import { useState } from "react"

function Fro(){
    let [see,setSee]=useState(false)
    let[state,setState]=useState({
      
        name:"",
        Email:"",
        pass:""
     
    })

    let [arr,setArr]=useState([])
  

    const hendal=(e)=>{
      
        let {name,value}=e.target;
        setState({...state,[name]:value});
        
    }
    
    

    const submit=(e)=>{

        e.preventDefault();
      setArr([...arr,state]);

        setState({

            name:"",
            Email:"",
            pass:""

        })
        
    }
    console.log(arr)

    const bler=(e)=>{

        const { value } = e.target;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            e.target.style.border = "2px solid red";
            alert("Please enter a valid email address.");
        } else {
            e.target.style.border = "";
        }
            
        
    }

    const handlePasswordBlur = (e) => {
        const { value } = e.target;
        const minLength = 8;
        if (value.length < minLength) {
            e.target.style.border = "2px solid red";
            alert(`Password must be at least ${minLength} characters long.`);
        } else {
            e.target.style.border = "";
        }
    };

    

      

    


return(

    <div>
        
        <div className="men">
        <form onSubmit={submit}>
            

           <input id="in1" type="text" value={state.name} name="name"  placeholder="  Enter you Username" onChange={hendal} required/><br></br>
           <input id="in2" type="text" value={state. Email} name="Email" placeholder="  Enter you Email" onBlur={bler} onChange={hendal}  required/> <br></br>
           <input id="in3"  type={see ? "text" : "password"} value={state.pass} name="pass" placeholder="  Enter you Password" onBlur={handlePasswordBlur} onChange={hendal} required/>
           <i id="i" onClick={() => setSee(!see)}  className={see ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i><br></br>
          
           <button className="btn" type="submit">Sign up</button>  

        </form>
        </div>

    </div>
)

}


export default Fro



// import React, { useState } from 'react';

// const SignupForm = () => {
//   const [data, setData] = useState({ name: '', email: '', pass: '' });
//   const [arr, setArr] = useState([]);
//   const [state, setState] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validatePassword = (pass) => {
//     return pass.length >= 6;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     let error = '';

//     if (name === 'email' && !validateEmail(value)) {
//       error = 'Invalid email format';
//     } else if (name === 'pass' && !validatePassword(value)) {
//       error = 'Password must be at least 6 characters';
//     }

//     setErrors({ ...errors, [name]: error });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (validateEmail(data.email) && validatePassword(data.pass)) {
//       setArr([...arr, data]);
//       setData({ name: '', email: '', pass: '' });
//       setErrors({});
//     } else {
//       alert('Please fix the errors before submitting');
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleClick} className="form-container">
//         <h2>Login</h2>
//         <div className="input-field">
//           <input
//             type="text"
//             required
//             value={data.name}
//             name="name"
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           <label>Enter your UserName</label>
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>
//         <div className="input-field">
//           <input
//             type="email"
//             required
//             value={data.email}
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           <label>Enter your Email</label>
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div className="input-field password-field">
//           <input
//             type={state ? 'text' : 'password'}
//             required
//             value={data.pass}
//             name="pass"
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           <label>Enter your password</label>
//           <button
//             className="material-icons password-icon"
//             onClick={() => setState(!state)}
//           >
//             {state ? 'visibility' : 'visibility_off'}
//           </button>
//           {errors.pass && <span className="error">{errors.pass}</span>}
//         </div>
//         <div className="forget">
//           <a href="#">Forgot password?</a>
//         </div>
//         <button type="submit">Log In</button>
//         <div className="register">
//           <p>
//             Don't have an account? <a href="#">Register</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;