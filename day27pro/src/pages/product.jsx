import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Product() {
  const [state, setState] = useState([]);
  const [filterdata, setFilterData] = useState({
    men: false,
    women: false,
    jewelery: false,
    electronics: false,
  });

  const [sort,setSort]=useState("")
  const [serch,setSerch]=useState("")

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilter = (e) => {
    setFilterData({
      ...filterdata,
      [e.target.name]: e.target.checked,
    });
  };

  function hendalsort(e)
  {
       setSort(e.target.value)
  }

  function handalserch(e){
       
    setSerch(e.target.value)
  }

  let filters = state;

  if (filterdata.men || filterdata.women || filterdata.jewelery || filterdata.electronics) {
    filters = filters.filter((el) => {
      if (filterdata.men && el.category === "men's clothing") {
        return true;
      }
      if (filterdata.women && el.category === "women's clothing") {
        return true;
      }
      if (filterdata.jewelery && el.category === 'jewelery') {
        return true;
      }
      if (filterdata.electronics && el.category === 'electronics') {
        return true;
      }
      return false;
    });
  }
  if(sort)
  {
    filters=filters.sort((a,b)=>{
      if(sort=="asc")
      {
        return a.price-b.price
      }
      else if(sort=="desc")
      {
        return b.price-a.price
      }
     
    })
  }
  if(serch)
  {
     filters=filters.filter((el)=>{
      
      return el.title.toLowerCase().includes(serch.toLowerCase())

     })
  }

 

  return (
    <>
      <h1 className="container-title">Product List</h1>
      <div className="filter-container">
        <label>
          <input type="checkbox" name="men" onChange={handleFilter} />: Men
        </label>
        <label>
          <input type="checkbox" name="women" onChange={handleFilter} />: Women
        </label>
        <label>
          <input type="checkbox" name="jewelery" onChange={handleFilter} />: Jewelery
        </label>
        <label>
          <input type="checkbox" name="electronics" onChange={handleFilter} />: Electronics
        </label>
          
          <select name="" id="" onChange={hendalsort}>
            <option value="">Sort optin</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>

          <input type="text" placeholder="  Search..." onChange={handalserch} />

      </div>
      <div className="product-container">
        {filters.map((el) => (
          <NavLink to={`/Product/${el.id}`} key={el.id} className="product-link">
            <div className="product-item">
              <img src={el.image} alt={el.title} className="product-image" />
              <p className="product-title">{el.title}</p>
              <h1 className="product-price">₹{el.price}</h1>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Product;
