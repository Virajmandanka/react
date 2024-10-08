import React, { useEffect, useState } from 'react';
import { db } from './fiare';
import { addDoc, collection, deleteDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';

function Addproducts() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setcategory] = useState('');
  const [arry, setArry] = useState([]);
  const [edit, setEdit] = useState(null);

  const userCollection = collection(db, 'products');  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name,
      price,
      imageUrl,
      category
    };

    if (edit) {
      const docRef = doc(db, 'products', edit);
      await updateDoc(docRef, obj);
      swal("Data updated successfully", "", "success");
    } else {
      const docRef = await addDoc(userCollection, obj);
      swal("Data added successfully", "", "success");
    }

    setName('');
    setPrice('');
    setImageUrl('');
    setcategory('');
    setEdit(null);
    getData();
  };

  const getData = async () => {
    const data = await getDocs(userCollection);
    const items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setArry(items);
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

  const handleEdit = (id) => {
    const item = arry.find((el) => el.id === id);
    setName(item.name);
    setPrice(item.price);
    setImageUrl(item.imageUrl);
    setcategory(item.category);
    setEdit(id);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          required
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          placeholder="Enter category"
          required
        />
        <input type="submit" value={edit ? "Update" : "Submit"} />
      </form>

      <ul className="user-list">
        {arry.map((el) => (
          <li key={el.id} className="user-item">
            <h1>{el.name}</h1>
            <p>Price: ${el.price}</p>
            <img src={el.imageUrl} alt={el.name} style={{ width: '100px', height: '100px' }} />
            <div className="buttons">
              <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
              <button className="update-btn" onClick={() => handleEdit(el.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Addproducts;
