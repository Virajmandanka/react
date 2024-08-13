import React, { useEffect, useState } from 'react';
import { db } from './fiare';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  const userCollection = collection(db, 'products');

  const getData = async () => {
    const data = await getDocs(userCollection);
    const items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    swal("Data deleted successfully", "", "success");
    getData();
  };

  return (
    <div className="container">
      <ul className="product-list">
        {products.map((el) => (
          <li key={el.id} className="product-item">
      <img src={el.imageUrl} alt={el.name} style={{ width: '280px', height: '170px' }} />

            <h1>Name : {el.name}</h1>
            <p>Price : ${el.price}</p>
            <div className="buttons">
              <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
             
              <Link to={`/addproduct/${el.id}`} className="edit-btn">Edit</Link>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/addproduct" className="add-btn">Add New Product</Link>
    </div>
  );
}

export default Products;
