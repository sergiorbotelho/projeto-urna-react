import React from 'react'
import './home.css'
import Menu from '../../components/Menu'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <div className='container-home'>
            <Menu />
            <div className='area-home'>
                <div className='content-home'>
                    <h1>Comece já suas próprias votações</h1>
                    <p>Crie e gerencie suas próprias urnas de maneira segura e privada </p>

                </div>
                <div className='area-btn-home'>
                    <Button onClick={()=>navigate('/projeto')}>Vamos lá!</Button>
                </div>
            </div>

        </div>
    )
}

export default Home