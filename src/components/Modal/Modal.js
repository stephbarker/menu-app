import React from 'react'
import './Modal.css';

export default function Modal({ handleDeleteTrue, handleDeleteFalse }) {
    return (
        <section className="modal">
            <article className="modal-content">
                <p>Are you sure?</p>
                <div>
                <button className="confirm-button" onClick={handleDeleteTrue}>Confirm</button>
                <button className="cancel-button" onClick={handleDeleteFalse}>Cancel</button>
                </div>
            </article>
        </section>
    );
};
