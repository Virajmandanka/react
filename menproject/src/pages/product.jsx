import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Product() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/img')
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="container-title">Product List</h1>
      <div className="men10">
        {state.map((el) => (
          <NavLink to={`/Product/${el.id}`} key={el.id} className="product-link">
            <div className="men11 shadow">
              <img src={el.image} alt={el.title} className="product-image" />
              <p className="hj">{el.title}</p>
              <h1 className="hj1">₹{el.price}</h1>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Product;
