    
import {useState} from "react"



    function Vo()
{

    let[state,setstate]=useState(0);
    let[a,setb]=useState(0);
    let[c,setd]=useState(0);
    
    
    


    function bjp()
    {
        setstate(state+1);
    }
    

    function con()
    {
        setb(a+1);
    }
    

    function app()
    {
        setd(c+1);
    }
    


return(

<div>

<div className="men1">

    <div className="heding">

        <h1 className="d4">Voting card</h1>

    </div> 
    <div className="box">
        <div className="box1"><img src="bjp.jpg" alt="" /></div>
        <h1 className="d3">{state}</h1>
        <button className="btn3" onClick={bjp}>Vote</button>
    </div>

    <div className="box">
    <div className="box1"><img src="kongresh.png" alt="" /></div>
    <h1 className="d3">{a}</h1>
    <button className="btn2" onClick={con}>Vote</button>
    </div>

    <div className="box">
        <div className="box1"><img src="aap.jpg" alt="" /></div> 
        <h1 className="d3">{c}</h1>
        <button className="btn2" onClick={app}>Vote</button>
    </div>


</div>

</div>

)

}

export default Vo;