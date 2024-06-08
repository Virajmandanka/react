

import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

function Ra() {

  let[state,setState]=useState("")
  let[price,setPrice]=useState("")
  let[qunti,setQunti]=useState("")
  let[ image,setImg]=useState("")
  let[arr,setArr]=useState([])
  const [showData, setShowData] = useState(false);


  const hendal=(e)=>
    {
       setState(e.target.value)
    }
    const henda2=(e)=>
        {
           setPrice(e.target.value)
        }
        const henda3=(e)=>
            {
               setQunti(e.target.value)
            }
            const henda4=(e)=>
                {
                   setImg(e.target.value)
                }

    const show=()=>{

      if(state && price && qunti &&  image)
        {
     
          let obj={

            name:state,
            price:price,
            qunti:qunti,
            image: image
        }
        setArr([...arr,obj])

        Swal.fire({
          title: "success",
          text: "You clicked the button!",
          icon: "success"
        });

       setState("");
       setPrice("");
       setQunti("");
       setImg("");
       
         
        }else{
         
          Swal.fire({
            title: "Oops...",
            text: "You clicked the button!",
            icon: "success"
          });
         
        }


        }
    
    console.log(arr)



    const showDataHandler = () => {

      setShowData(true);
    };
   



  return (

    <div>

    <h1 className='d'>Product data from</h1>
    <div className='men'>
    <input className='in1' type="text" placeholder='  Enter you Name' onChange={hendal} />
    <input className='in2' type="text" placeholder='  Enter you Price' onChange={henda2} />
    <input className='in3' type="text" placeholder='  Enter you Quntity' onChange={henda3} />
    <input className='in4' type="text" placeholder='  Enter you Image url'  value={image} onChange={henda4} /><br/>
    <button className='btn1' onClick={show}>Add data</button><br/>
    <button className='btn2' onClick={showDataHandler}>Show Data</button>

    </div>

    {showData && (
        <div>
          {arr.map((el, index) => (
            <div key={index}>


            <div className='men2'>
              <div className='box'> <h3 className='d1'>Product Name:- {el.name}</h3></div>
              <div className='box'> <h3 className='d1'>Price:- {el.price}</h3></div>
              <div className='box'> <h3 className='d1'>Quantity:- {el. qunti}</h3></div>
              <div className='box1'>
                 
              <img src={el.image} alt={el.name} style={{width: '130px', height: '90px'}} />

              </div>
            </div>



              {/* <h1>Product Name: {el.name}</h1> 
              <h1>Price: {el.price}</h1>
              <h1>Quantity: {el. qunti}</h1>
              <h1>Image URL: {el.image}</h1>
              <img src={el.image} alt={el.name} style={{width: '50px', height: '50px'}} /> */}
            </div>
          ))}
        </div>
      )}

{/* <div className='men2'>
              <div className='box'></div>
              <div className='box'></div>
              <div className='box'></div>
              <div className='box1'></div>
            </div> */}



    
   

    </div>
  )
}

export default Ra





