import React from "react";
import EasyEdit from 'react-easy-edit';
import Swal from 'sweetalert2';

import "./Menu.css";

export default function Menu({ items, onDelete }) {

    //Modal confirming save after Edit
    const save = () => Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully edited this item!'
      });

    return (
        <div className="menu-container">
            {items.map((item) => {
                const { id, img, title, desc, price } = item;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="image" />
                        <div className="item-info">
                            <header>
                                <h4><EasyEdit type="text" onSave={save}  saveButtonLabel="Save" cancelButtonLabel="Cancel" placeholder={title} /></h4>
                                <h4 className="price">$<EasyEdit type="text" onSave={save} saveButtonLabel="Save" cancelButtonLabel="Cancel" placeholder={price} /></h4>
                            </header>
                            <p className="item-desc"><EasyEdit type="textarea" onSave={save} saveButtonLabel="Save" cancelButtonLabel="Cancel" placeholder={desc} /></p>
                            <button className="remove-button" onClick={() => onDelete(item.id)}>Remove Item</button>
                        </div>
                    </article>
                );
            })}   
        </div>
    );
};
