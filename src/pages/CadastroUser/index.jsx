import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from '../../assets/logo.png';
import { toast } from 'react-toastify';
import {FaEyeSlash } from 'react-icons/fa';
import { IoAt } from 'react-icons/io5';
import './cadastroUser.css';
import { Link } from "react-router-dom";
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

export default function CadastroUser() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleRegister() {

        if (email && password) {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(() => {

                    toast.success("Cadastro realizado.");
                    navigate('/')
                })
                .catch((error) => {
                    console.log("Erro ao cadastrar: " + error);
                })

        }
        else {
            alert("Preencha todos os campos")
        }


    }

    return (
        <div className="area-cadastro">

            <img src={logoImg} alt="Logo do sistema" />
            <h1>Cadastro de usuário</h1>

            <div className="areainput">
                
                <div className="inputWithIcon">
                    <Input
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <IoAt className="icon" />
                </div>
                <div className="inputWithIcon">
                    <Input
                        placeholder="senha"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <FaEyeSlash className="icon" />
                </div>

                <Button onClick={handleRegister}>Cadastrar</Button>
                <Link to='/login'>Já possui uma conta? Faça o login</Link>

            </div>
        </div>
    )
}