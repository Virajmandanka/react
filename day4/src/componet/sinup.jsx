import { useState } from "react";


function Sin()
{
  let[state,setState]=useState("")
  let[b,setb]=useState("")
  let[c,setc]=useState("")
  let[a,seta]=useState([])

    function hendal(e)
    {
       setState(e.target.value)
    }
    function inn(kk){

         setb(kk.target.value)
    }
    function pass(pa)
    {
        setc(pa.target.value)
    }
    function past()
    {
        let obj={

           task:state,
           Email:b,
           password:c,
           com:false,

        }
        seta([...a,obj]);
    }
    console.log(a);
 
    return(

    <div>
        <h1>ram</h1>

        <div className="men">

            <div className="box">

                <input className="in2" type="text" placeholder="  Enter you name" onChange={hendal} />
                <input className="in3" type="text" placeholder="  Enter you Email id" onChange={inn} />
                <input className="in3" type="number" placeholder="  Enter you password" onChange={pass} /><br/>
                <button className="but2" onClick={past}>Sin up</button>
                
            

            </div>

        </div>
    </div>

    )
   
}
export default Sin;