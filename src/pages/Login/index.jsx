import React, { useState } from "react";
import imgLogo from '../../assets/logo.png';
import imgVoto from '../../assets/login.png';
import './login.css';
import { Link } from 'react-router-dom';
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FaUser, FaEyeSlash } from 'react-icons/fa';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
export default function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin() {
        await signInWithEmailAndPassword(auth, user, password)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log("Erro ao fazer login: " + error);
            })
    }
    return (
        <div className="container-login">
            <div className="container-input">
                <img src={imgLogo} alt="Logo do sistema" />
                <div className="inputWithIcon">
                    <Input
                        placeholder="Usuário"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="inputWithIcon">
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <FaEyeSlash className="icon" />
                </div>
                <Button onClick={handleLogin}>Entrar</Button>
                <Link className="link" to="/cadastrouser">Não tem uma conta? cadastre-se</Link>

            </div>
            <div className="container-img">

                <img src={imgVoto} alt="Imagem de uma simulação de votação" />
            </div>
        </div>
    )
}
