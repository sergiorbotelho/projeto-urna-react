import React from 'react'
import './modal.css'
function Modal({ children, onClose }) {


    function handleOutSideClick(e) {
        if (e.target.id === 'modal') {
            onClose();

        }
    }

    return (
        <div id='modal' className='modal' onClick={handleOutSideClick}>
            <div className='container-modal'>
                <div className='btn-close' onClick={onClose}></div>
                <div className='content'>
                    <h1>Criação do projeto</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal