import { useEffect, useState } from "react";

function Weth() {
    const [state, setState] = useState("");
    const [data, setData] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(false); 

    useEffect(() => {

        if (shouldFetch && state) { 

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=4e0eff8648831f93ed1761190fbb61ab&units=metric`)

                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setShouldFetch(false); 
                });
        }

    }, [shouldFetch, state]); 
    

    const handleClick = () => {
        setShouldFetch(true); 
    };

    return (
        <div>
             <div className="men">
            <input id="we"  type="text" placeholder="  Enter city name"  onChange={(e) => setState(e.target.value)} />
             
            <button onClick={handleClick}>Search</button>

            
            
            {data && (
                <div>
                   
                        <h1 id="name">{data.name}</h1>
                        <h2 id="de">{Math.floor(data.main.temp)}°C</h2>
                        <h4 id="clo">{data.weather[0].main}</h4>
                        <h5 id="vi">Visibility: {data.visibility} meters</h5>
                   
                </div>
            )}
            </div>
           
        </div>
    );
}

export default Weth;

