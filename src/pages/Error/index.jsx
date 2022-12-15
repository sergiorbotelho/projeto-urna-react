import React from 'react';
import error from '../../assets/error.png';
import './error.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
export default function Error() {
  
    return (
        <div className='containerErro'>
            <img src={error} alt="Imagem 404 página não encontrada" />
            <h1>Página não encontrada!</h1>
            <p>Esta página que está procurando não existe.</p>
            <Link to="/">
                <Button className="button">Voltar para Home</Button>
            </Link>
        </div>
    )
}

