import React from 'react'
import './card.css'
function Card({ name, img }) {

    return (
        <div className='container-card'>
            <div className='card'>
                <div className='content'>
                    <img className='imgCard' src={img} alt="Imagem do grupo" />
                    <h1 className='h1'>{name}</h1>
                </div>
            </div>
        </div>
    )
}


export default Card