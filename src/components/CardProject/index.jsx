import React from 'react'
import './cardproject.css'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
function CardProject(props) {
    
    return (
        <div className='area'>
            <div className='area-projetoscriados'>
                <div className='container-criados'>
                    <div>Nome do candidato: {props.nome}</div>
                    <div>Numero: {props.numero}</div>
                    <div>Descrição: {props.partido}</div>
                </div>
            </div>
            <div className='area-icon'>
                <FaEdit onClick={props.update} color='#ddb225' size={24} style={{ cursor: 'pointer' }} />
                <FaTrashAlt onClick={props.delete} color='#FF0000' size={24} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default CardProject