
import {useState} from "react";

function Count()
{

    let [state,setstate]=useState(0);


  function add()
  {

    setstate(state+1);
  }


  function sub()
  {
    setstate(state-1);
  }



  return(

   <div>
   
    <div className="men">
    <h1 className="d">Couter</h1>

    <h1 className="d1">{state}</h1>
    <button className="but1" onClick={add}>+</button>
    <button className="but1" onClick={sub}>-</button>

    
    </div>

   </div>

  )

}
export default Count;
