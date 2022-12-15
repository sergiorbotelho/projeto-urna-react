import React, { useState, useContext, useEffect } from 'react';
import Menu from '../../components/Menu';
import './cadastro.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ContextApi } from '../../components/Context/contexApi';
import { db } from '../../firebaseConnection';
import { doc, addDoc, collection, onSnapshot, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CardProject from '../../components/CardProject';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
function Cadastro() {
    const { projeto } = useContext(ContextApi);
    const [edit, setEdit] = useState([])
    const [editEleitor, setEditEleitor] = useState([])
    const navigate = useNavigate();

    const [candidato, setCandidato] = useState('');
    const [partido, setPartido] = useState('');
    const [numero, setNumero] = useState('');
    const [candidatos, setCandidatos] = useState([]);

    const [eleitor, setEleitor] = useState('');
    const [email, setEmail] = useState('')
    const [eleitores, setEleitores] = useState([])

    useEffect(() => {

        async function loadCandidatos() {
            const docRef = collection(db, "Projeto", projeto, "Candidato")
            const q = query(docRef, orderBy("created", "desc"));


            const unsub = onSnapshot(q, (snapshot) => {

                let lista = [];
                snapshot.forEach((item) => {
                    lista.push({
                        id: item.id,
                        nome: item.data().nome,
                        numero: item.data().numero,
                        partido: item.data().partido
                    })
                })
                setCandidatos(lista);
            });
        }
        loadCandidatos();
    }, [])
    useEffect(() => {

        async function loadEleitor() {
            const docRef = collection(db, "Projeto", projeto, "Eleitor")
            const q = query(docRef, orderBy("created", "desc"));


            const unsub = onSnapshot(q, (snapshot) => {

                let lista = [];
                snapshot.forEach((item) => {
                    lista.push({
                        id: item.id,
                        nome: item.data().nome,
                        email: item.data().email,

                    })
                })
                setEleitores(lista);
            });
        }
        loadEleitor();
    }, [])

    async function handleSalvar() {
        if (candidato === '' || partido === '' || numero === '') {
            alert('Preencha todos os dados do candidato');
            return
        }
        const docRef = doc(db, "Projeto", projeto);
        await addDoc(collection(docRef, "Candidato"), {
            nome: candidato,
            numero: numero,
            partido: partido,
            created: Date(),
            votos: 0,

        })
            .then(() => {
                toast.success("Cadastro realizado")
                setCandidato('')
                setPartido('')
                setNumero('')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    async function handleSalvarEleitor() {
        if (eleitor === '' || email === '') {
            alert('Preencha todos os dados do eleitor');
            return
        }
        const docRef = doc(db, "Projeto", projeto);
        await addDoc(collection(docRef, "Eleitor"), {
            nome: eleitor,
            email: email,
            created: Date(),

        })
            .then(() => {
                toast.success("Cadastro realizado")
                setEleitor('')
                setEmail('')

            })
            .catch((error) => {
                console.log(error);
            })

    }

    async function handleDelete(id) {
        const docRef = doc(db, "Projeto", projeto, "Candidato", id);
        await deleteDoc(docRef);
        toast.success("Candidato deletado");
    }

    async function handleDeleteEleitor(id) {
        const docRef = doc(db, "Projeto", projeto, "Eleitor", id);
        await deleteDoc(docRef);
        toast.success("Eleitor deletado");
    }
    function handleUpdate(doc) {
        setCandidato(doc.nome);
        setNumero(doc.numero);
        setPartido(doc.partido);
        setEdit(doc);
    }
    function updateEleitor(doc) {
        setEleitor(doc.nome);
        setEmail(doc.email)
        setEditEleitor(doc)
    }
    async function handleUpdateCandidato() {
        const docRef = doc(db, "Projeto", projeto, "Candidato", edit?.id);
        await updateDoc(docRef, {
            nome: candidato,
            numero: numero,
            partido: partido
        })
            .then(() => {
                setEdit({});
                setCandidato('');
                setNumero('');
                setPartido('');
                toast.success('Candidato atualizado')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    async function handleUpdateEleitor() {
        const docRef = doc(db, "Projeto", projeto, "Eleitor", editEleitor?.id);
        await updateDoc(docRef, {
            nome: eleitor,
            email: email,

        })
            .then(() => {
                setEditEleitor({});
                setEleitor('');
                setEmail('');
                toast.success('Eleitor atualizado')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='area-projeto'>
            <div className='container-cadastro'>
                <Menu />
                <div className='titulo-projeto'>Cadastro projeto: {projeto}</div>
                <div className='area-total-cadastro'>
                    <div className='area-cadastro-projeto'>
                        <Input
                            placeholder='Digite o nome do candidato'
                            value={candidato}
                            onChange={(e) => setCandidato(e.target.value)}
                        />
                        <Input
                            placeholder='numero'
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                        <Input
                            placeholder='Partido'
                            value={partido}
                            onChange={(e) => setPartido(e.target.value)}
                        />

                        {Object.keys(edit).length > 0 ? (
                            <Button onClick={handleUpdateCandidato}>Atualizar</Button>
                        ) :
                            <Button onClick={handleSalvar}>Salvar</Button>
                        }


                        {
                            candidatos.map((doc) => (
                                <div key={doc.id}>
                                    <CardProject
                                        nome={doc.nome}
                                        numero={doc.numero}
                                        partido={doc.partido}
                                        delete={() => handleDelete(doc.id)}
                                        update={() => handleUpdate(doc)} />
                                </div>
                            ))
                        }

                        <br />
                        <Button onClick={() => navigate('/projeto')}>Conluir</Button>

                    </div>
                    <div className='area-cadastro-projeto'>
                        <Input
                            placeholder='Digite o nome do eleitor'
                            value={eleitor}
                            onChange={(e) => setEleitor(e.target.value)}
                        />
                        <Input
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <Input
                            placeholder='Partido'
                            value={partido}
                            onChange={(e) => setPartido(e.target.value)}
                        /> */}

                        {Object.keys(editEleitor).length > 0 ? (
                            <Button onClick={handleUpdateEleitor}>Atualizar</Button>
                        ) :
                            <Button onClick={handleSalvarEleitor}>Salvar</Button>
                        }


                        {
                            eleitores.map((doc) => (
                                <div key={doc.id}>
                                    <div className='area'>
                                        <div className='area-projetoscriados'>
                                            <div className='container-criados'>
                                                <div>Nome do candidato: {doc.nome}</div>
                                                <div>Numero: {doc.email}</div>
                                            </div>
                                        </div>
                                        <div className='area-icon'>
                                            <FaEdit onClick={() => updateEleitor(doc)} color='#ddb225' size={24} style={{ cursor: 'pointer' }} />
                                            <FaTrashAlt onClick={() => handleDeleteEleitor(doc.id)} color='#FF0000' size={24} style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }

                        <br />
                        <Button onClick={() => navigate('/projeto')}>Conluir</Button>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Cadastro