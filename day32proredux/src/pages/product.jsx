// Product.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingData } from '../reduxapi/action';


function Product() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  const add = () => {
    console.log(data);
  };

  return (
    <div>
      <div className="product-grid">
        {data && data.map((el) => (
          <div key={el.id} className="product-item">
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
            <p>Price: {el.price}</p>
          </div>
        ))}
      </div>
      {/* <button className="btn btn-dark" onClick={add}>Add</button> */}
    </div>
  );
}

export default Product;
