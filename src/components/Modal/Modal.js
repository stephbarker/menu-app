import React from 'react'

export default function Modal({ handleDeleteTrue, handleDeleteFalse }) {
    return (
        <section>
            <article>
                <p>Are you sure?</p>
                <div className="modal-buttons">
                <button className="confirm-button" onClick={handleDeleteTrue}>Confirm</button>
                <button className="cancel-button" onClick={handleDeleteFalse}>Cancel</button>
                </div>
            </article>
        </section>
    );
};
