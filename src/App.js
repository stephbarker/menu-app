import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu/Menu';
import AddItemForm from './forms/AddItem/AddItemForm';
import menuList from './data';

import Swal from "sweetalert2";

function App() {
  //Set State
  const [items,setItems] = useState(menuList);
  
  //Helper Functions

  //Add Item
  const addItem = item => {
    item.id = items.length + 1;
    setItems([...items, item])
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new menu item!'
    });
  };

//Delete Item
const deleteItem = (id) => {
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
      setItems(items.filter(item => item.id !== id));
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  });
}

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
          <Route path='/' element={<Menu items={items} onDelete={deleteItem}/>}/>
          <Route path='/add' element={<AddItemForm addItem={addItem} />}/>
        </Routes>
      </section>
    </main>
    </Router>
  );
};

export default App;
