import React, { useEffect, useState } from "react";

function Ra() {
    const [state, setState] = useState(true);
    const [arr, setArr] = useState([]);
    const [login, setLogin] = useState(false);

    useEffect(() => {

        setLogin(true);

        fetch(`https://randomuser.me/api/`)

            .then((response) => response.json())
            .then((data) => {

                setArr(data.results);
                setLogin(false);
            })
            // .catch((error) => {
            //     console.error("Error fetching data:", error);
            //     setLogin(false);  // Ensure login state is set to false even if there's an error
            // });
    }, [state]);

    return (
        <div>
        
            <button className="btn" onClick={() => setState(!state)}>Click</button>
        
           <div className="box">{login && <h2>Loading...</h2>}</div> 

            {arr.map((el, index) => (
                <div key={index}>
                    <div className="men">

                    <img className="im" src={el.picture.large} alt="" />
                    
                    <h2 className="d">{el.name.title} {el.name.first} {el.name.last}</h2>
                    <h4>Email:-{el.email} </h4>
                    <h4>Phone:-{el.phone} </h4>
                    <h3>city:-{el.location.city} </h3>
                    <h3>state:-{el.location.state} </h3>
                    <h3>country:-{el.location.country} </h3>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Ra;


