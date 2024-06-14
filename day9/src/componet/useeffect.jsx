import  { useEffect,useState } from 'react';

function Ra() {
    const [arr, setArr] = useState([]);

    const fetchData = () => {

        fetch('https://dog.ceo/api/breeds/image/random')

            .then((res) => res.json())
            .then((data) => {

                console.log([data]); 
            })

            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    useEffect(() => {

        fetchData();
        

    }, []);

    return (
        <div>
           

            {arr.map((el, index) => (
                <div key={index}> 
                    <h1>{el.success}</h1>
                    
                    <img src={el.message} alt="" style={{width: '700px', height: '400px'}} />
                    <h1 className='d'>{el.status}</h1>
                </div>
                
            ))}
             <button onClick={fetchData}>Fetch Data</button>
        </div>
    );
}

export default Ra;





// {/* <div>
// <button onClick={fetchData}>Fetch Data</button>

// {arr.map((el, index) => (
//     <h1 key={index}>{el.title}</h1> // Fixed typo from tital to title
    
    
// ))}
// </div> */}










