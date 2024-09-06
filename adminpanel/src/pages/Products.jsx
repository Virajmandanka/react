import React, { useEffect, useState } from 'react';
import { db } from './fiare';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [filterdata, setFilterData] = useState({
    dell: false,
    hp: false,
    realme: false,
    redmi: false,
  });

  const userCollection = collection(db, 'products');

  const getData = async () => {
    const data = await getDocs(userCollection);
    const items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  const [sort,setSort]=useState("")
  const [serch,setSerch]=useState("")

  useEffect(() => {
    getData();
  }, []);

  // const handleDelete = async (id) => {
  //   const docRef = doc(db, 'products', id);
  //   await deleteDoc(docRef);
  //   swal("Data deleted successfully", "", "success");
  //   getData();
  // };


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


  let filters = products;


  if (filterdata.dell || filterdata.hp || filterdata.realme || filterdata.redmi) {

    filters = filters.filter((el) => {

      if (filterdata.dell && el.category === 'dell') return true;
      if (filterdata.hp && el.category === 'hp') return true;
      if (filterdata.realme && el.category === 'realme') return true;
      if (filterdata.redmi && el.category === 'redmi') return true;
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
        
        return el.name.toLowerCase().includes(serch.toLowerCase())
  
       })
    }

  return (
    <div className="container">

     <select name="" id="" onChange={hendalsort} className='sort'>
            <option value="">Sort optin</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>

          <input type="text" value={serch} placeholder="  Search..." onChange={handalserch} className='se' />

          <label>
          <input
          type="checkbox"
          name="dell"
          checked={filterdata.dell}
          onChange={handleFilter}
          className='fe'
        /> Dell
      </label>
      <label>
        <input
          type="checkbox"
          name="hp"
          checked={filterdata.hp}
          onChange={handleFilter}
          className='fe'
        /> HP
      </label>
      <label>
        <input
          type="checkbox"
          name="realme"
          checked={filterdata.realme}
          onChange={handleFilter}
          className='fe'
        /> Realme
      </label>
      <label>
        <input
          type="checkbox"
          name="redmi"
          checked={filterdata.redmi}
          onChange={handleFilter}
          className='fe'
        /> Redmi
      </label>





      <ul className="product-list">
        {filters.map((el) => (
          <li key={el.id} className="product-item">
      <img src={el.imageUrl} alt={el.name} style={{ width: '280px', height: '170px' }} />

            <h1>Name : {el.name}</h1>
            <p>Price : ${el.price}</p>
            <div className="buttons">
              {/* <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button> */}
             
              {/* <Link to={`/addproduct/${el.id}`} className="edit-btn">Edit</Link> */}
            </div>
          </li>
        ))}
      </ul>
      <Link to="/addproduct" className="add-btn">Add New Product</Link>
    </div>
  );
}

export default Products;
