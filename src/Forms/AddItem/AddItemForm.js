import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import './AddItemForm.css';

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
        if(!item.img && !item.title && !item.desc && !item.price){
            Swal.fire({
                icon:'error',
                title: 'Oops...',
                text: 'Please make sure all fields are filled out.'
            });
        }if(item.img && item.title && item.desc && item.price) {
            handleChange(e, props.addItem(item));
        };
    };

    return (
        <div className='form-ctr'>
       <form className="form">
           <label className="form-label">* Image Url:</label>
           <input className="form-input" type="url" name="img" value={item.img} onChange={handleChange}/>
           <label className="form-label">* Title:</label>
           <input className="form-input" type="text" name="title" value={item.title} onChange={handleChange}/>
           <label className="form-label">* Description:</label>
           <input className="form-input" type="text" name="desc" value={item.desc} onChange={handleChange}/>
           <label className="form-label">* Price:</label>
           <input className="form-input" type="text" name="price" value={item.price} onChange={handleChange}/>
           <button className="submit-button" type="submit" onClick={handleSubmit}><Link className="submit-btn-txt" to={'/'}>Add Item</Link></button>
           <p className='required-txt'>* Please note, all fields all required.</p>
       </form>
       </div>
    );
};
