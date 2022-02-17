import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu/Menu';
import AddItemForm from './forms/AddItem/AddItemForm';
import items from './data';

function App() {
  //Set State
  const [menuItems,setMenuItems] = useState(items);

  //Helper Functions - Add Item
  const addItem = item => {
    item.id = items.length + 1;
    setMenuItems([...items, item]);
  }

  return (
    <Router>
    <main>
      <section>
        <div className="title">
        <h2>My Menu</h2>
        <nav>
          <li><Link to={'/add'}>Add Item</Link></li>
        </nav>
        </div>
        <Routes>
          <Route path='/' element={<Menu items={menuItems}/>}/>
          <Route path='/add' element={<AddItemForm addItem={addItem} />}/>
        </Routes>
      </section>
    </main>
    </Router>
  );
};

export default App;
