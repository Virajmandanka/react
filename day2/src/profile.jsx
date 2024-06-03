import { useState } from "react";

function Pro()
{

    let[state,setstate]=useState("name:-"+""+"Viraj mandanka");
    let[a,setb]=useState("Course:-"+""+"Full stack devlopment");
    let[c,setd]=useState("Email:-"+""+"virajmandanka@gmail.com");
    let[e,setf]=useState("Phone no:-"+""+"9104426011");
    let[g,seth]=useState("Gr id:-"+""+"5467");
    let[i,setj]=useState("Branch:-"+""+"RWR1");


   
    return(

   <div>

  <div className="men3">
  
   <div className="jj">
    <h1 className="pro">Profile</h1>
    </div>  

  <div className="box3">
   
   <h2 className="d5">{state}</h2>
   <h2 className="d5">{a}</h2>
   <h2 className="d5">{c}</h2>
   <h2 className="d5">{e}</h2>
   <h2 className="d5">{g}</h2>
   <h2 className="d5">{i}</h2>

  </div>

  </div>

   </div>


    )


}
export default Pro;