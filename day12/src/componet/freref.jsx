import React, { useRef, useState } from "react";

function Ra() {
    const [state, setState] = useState("");
    
    const a = useRef(); 

    const handle = () => {

        if (a.current)
       {
              a.current.style.backgroundColor="red";
            //   a.current.focus()
        }

    };

    return (
        <React.Fragment>

            <h1>ram</h1>

            <input type="text" ref={a} /> 
            <input  type="text"  value={state}   onChange={(e) => setState(e.target.value)}/>
                                        
            <button onClick={handle}>click</button>  
                 
        </React.Fragment>
    );
}

export default Ra;
