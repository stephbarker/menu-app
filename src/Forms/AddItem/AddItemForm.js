import React, { useState } from 'react';

export default function AddItemForm(props) {
    //Initialize and Set State for Form
    const initItem = {id: null, img: '', title: '', desc: '', price: ''}
    const [item, setItem] = useState(initItem);

    return (
       <form>
           <label for="img">Image Url:</label>
           <input type="url" name="img" value={item.img}/>
           <label for="title">Title:</label>
           <input type="text" name="title" value={item.title}/>
           <label for="desc">Description:</label>
           <input type="text" name="desc" value={item.desc}/>
           <label for="price">Price:</label>
           <input type="text" name="price" value={item.price}/>
           <button className="submit-button" type="submit">Add Item</button>
       </form>
    );
};
