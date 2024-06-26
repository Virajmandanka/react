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



