import React, { useState } from 'react';

export default function AddItemForm(props) {
    //Initialize and Set State for Form
    const initItem = {id: null, img: '', title: '', desc: '', price: ''}
    const [item, setItem] = useState(initItem);

    //Helper Functions - onChange & onSubmit
    const handleChange = e => {
        const {name, value} = e.target;
        setItem({...item, [name]: value});
    };

    const handleSubmit = e => {
        //Prevent default page refresh
        e.preventDefault();
        //Check that all inputs are filled out
        if(item.img && item.title && item.desc && item.price) {
            handleChange(e, props.addItem(item));
        };
    };

    return (
       <form>
           <label for="img">Image Url:</label>
           <input type="url" name="img" value={item.img} onChange={handleChange}/>
           <label for="title">Title:</label>
           <input type="text" name="title" value={item.title} onChange={handleChange}/>
           <label for="desc">Description:</label>
           <input type="text" name="desc" value={item.desc} onChange={handleChange}/>
           <label for="price">Price:</label>
           <input type="text" name="price" value={item.price} onChange={handleChange}/>
           <button className="submit-button" type="submit" onClick={handleSubmit}>Add Item</button>
       </form>
    );
};
