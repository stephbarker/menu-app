import React from "react";
import "./Menu.css";

export default function Menu({ items, handleDelete }) {
    return (
        <div className="menu-container">
            {items.map((item) => {
                const { id, img, title, desc, price } = item;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="image" />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item-desc">{desc}</p>
                            <button className="remove-button" onClick={() => handleDelete(id)}>Remove Item</button>
                        </div>
                    </article>
                );
            })}   
        </div>
    );
};
