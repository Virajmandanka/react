import React, { useEffect, useState } from 'react';
import { db } from './fair';
import { addDoc, collection, deleteDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';



function Cide() {
  const [name, setName] = useState('');
  const [arry, setArry] = useState([]);
  const [edit, setEdit] = useState(null);

  const userCollection = collection(db, 'users');

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    let obj = {
      name: name
    };

    if (edit != null) {

      let r = doc(db, "users", edit)
      await updateDoc(r, obj)
      // alert("Data updated successfully");
      swal("Data updated successfully");

    } 
    else {
      let d = await addDoc(userCollection, obj);
      // alert(`Data added successfully with ID: ${d.id}`);
      swal({
        title: "Success",
        text: "data added Successfully",
        icon: "success",
        button: "Aww yiss!",
      });
    }

    setName("");
    setEdit(null)
    getData();
  };

  const getData = async () => {

    let data = await getDocs(userCollection);
    let add = data.docs.map((el) => {

      return { id: el.id, ...el.data() };

    });
    setArry(add);
  };

  useEffect(() => {
    getData();
  }, []);


  const handaldelet = async (id) => {

    let de = doc(db, "users", id)
    await deleteDoc(de)
    // alert("Data deleted successfully")
    swal("Data deleted successfully");

    getData()

  }

  const handaledit = async (id) => {

    setEdit(id)

    arry.forEach((el) => {
      if (el.id === id) {
        setName(el.name)
      }
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

      <input type="text" value={name}  onChange={(e) => setName(e.target.value)} placeholder="Enter name"  required />

        <input type="submit" value={edit != null ? "Update" : "Submit"} />
        
      </form>   
          
         
          
      <ul className="user-list">
        {
        arry.map((el) => (

          <li key={el.id} className="user-item">

            <h1>{el.name}</h1>

            <div className="buttons">
              <button className="delete-btn" onClick={() => handaldelet(el.id)}>Delete</button>
              <button className="update-btn" onClick={() => handaledit(el.id)}>Update</button>
            </div>

          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default Cide;
