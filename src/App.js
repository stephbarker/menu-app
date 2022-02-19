import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu/Menu';
import AddItemForm from './forms/AddItem/AddItemForm';
import Modal from './components/Modal/Modal';
import items from './data';

import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid';

function App() {
  //Set State
  const [menuItems,setMenuItems] = useState(items);
  // const [modal, setModal] = useState({
  //   show: false,
  //   id: null,
  // });

  //Helper Functions
  //Add Item
  const addItem = item => {
    const id = uuidv4();
    const newItem = {id, ...item}
    setMenuItems([...items, newItem]);
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new menu item!'
    });
  };

//Delete Item
const deleteItem = (id) => {
  const deleteItem = items.filter((item) => item.id !== id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      setMenuItems(deleteItem);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  });
}

  // //Show Confirmation Modal
  // const handleDelete = (id) => {
  //   setModal({
  //     show: true,
  //     id,
  //   });
  // };

  // //Delete Item and Close Modal
  // const handleDeleteTrue = () => {
  //   if(modal.show && modal.id){
  //     let filteredData = items.filter((item) => item.id !== modal.id);
  //     setMenuItems(filteredData);
  //     setModal({
  //       show:false,
  //       id: null,
  //     });
  //   }
  // };

  // //Hide Confirmation Moal
  // const handleDeleteFalse = () => {
  //   setModal({
  //     show: false,
  //     id: null,
  //   });
  // };

  return (
    <Router>
    <main>
      <section>
        <header>
        <nav className="nav-bar">
          <li><Link className="home-link" to={'/'}>My Menu</Link></li>
          <li><Link className="add-link" to={'/add'}>Add Item</Link></li>
        </nav>
        </header>
        <Routes>
          <Route path='/' element={<Menu items={menuItems} onDelete={deleteItem}/>}/>
          <Route path='/add' element={<AddItemForm addItem={addItem} />}/>
        </Routes>
        {/* {modal.show && (
          <Modal handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse}/>
        )} */}
      </section>
    </main>
    </Router>
  );
};

export default App;
