import React, { useState } from "react";

import './App.css';
import Menu from './components/Menu/Menu';
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
    <main>
      <section>
        <div className="title">
        <h2 className>My Menu</h2>
        <nav>
          <li>Add Item</li>
        </nav>
        </div>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
};

export default App;
