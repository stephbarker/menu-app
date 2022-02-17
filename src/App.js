import React, { useState } from "react";

import Menu from './components/Menu/Menu';
import items from './data';

function App() {
  //Set State
  const [menuItems] = useState(items);

  return (
    <main>
      <section>
        <div className="title">
        <h2 className>My Menu</h2>
        </div>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
};

export default App;
