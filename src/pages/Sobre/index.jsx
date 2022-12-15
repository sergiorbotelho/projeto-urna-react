import React from 'react';
import './sobre.css'
import Card from '../../components/Card';
import imgFelipe from '../../assets/felipe.jpeg';
import imgLucas from '../../assets/lucas.jpeg';
import imgPaulo from '../../assets/paulo.jpeg';
import imgSergio from '../../assets/sergio.jpeg';
import imgVeronica from '../../assets/veronica.jpeg';
import imgViviane from '../../assets/viviane.jpeg';
import Menu from '../../components/Menu';
function Sobre() {
    return (
        <div className='container-sobre'>
            <Menu />
            <div className='area-card margin-card'>
                <div className='titulo'>Grupo 02</div>
                <div className='area-card'>
                    <div className='grupo1'>
                        <Card name="Felipe Barbosa" img={imgFelipe} />
                        <Card name="Lucas Henrique" img={imgLucas} />
                        <Card name="Paulo Victor" img={imgPaulo} />
                    </div>
                    <div className='grupo1'>
                        <Card name="Sérgio Botelho" img={imgSergio} />
                        <Card name="Verônica Pereira" img={imgVeronica} />
                        <Card name="Viviane Pinheiro" img={imgViviane} />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Sobre;