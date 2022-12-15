import React, { useState, useContext, useEffect } from 'react'
import './projeto.css';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../../components/Context/contexApi';
import { db } from '../../firebaseConnection';
import { doc, setDoc, collection, onSnapshot, deleteDoc, query, orderBy, where } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import { FaTrashRestore } from 'react-icons/fa'
import { toast } from 'react-toastify';

function Projeto() {

    const [openModal, setOpenModal] = useState(false);
    const { projeto, setProjeto } = useContext(ContextApi);
    const [projetos, setProjetos] = useState([]);
    const [user, setUser] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        async function loadUrnas() {
            const userDetail = localStorage.getItem("@detailUser")
            setUser(JSON.parse(userDetail));

            if (userDetail) {
                const data = JSON.parse(userDetail)

                const docRef = collection(db, "Projeto");
                const q = query(docRef, orderBy("created", "desc"), where("uid", "==", data?.uid));

                const unsub = onSnapshot(q, (snapshot) => {

                    let lista = [];

                    snapshot.forEach((item) => {
                        lista.push({
                            id: item.id,

                        })
                    })
                    setProjetos(lista);
                   
                });
            }

        }
        loadUrnas();
    }, [])

    async function handleSalvarProjeto() {

        await setDoc(doc(db, "Projeto", projeto), {
            uid: user.uid,
            created: Date()
        })
            .then(() => {

                navigate('/cadastro')

            })
            .catch((error) => {
                console.log(error);
            })

    }


    async function handleDeleteProjeto(id) {
        const docRef = doc(db, "Projeto", id);
        await deleteDoc(docRef);
        toast.success("Projeto deletado")
    }
    return (
        <div className='container-projeto'>
            <Menu />

            <div className='container-area'>
                <div>
                    <div className='area-novoprojeto'>
                        <div className='btn-addprojeto' onClick={() => setOpenModal(true)}>+</div>
                        <h1>Novo projeto</h1>
                    </div>
                </div>
                <div className='titulo-criados'>Projetos Criados</div>
                {
                    projetos.map((item) => (
                        <div key={item.id} className="area-urna">
                            <Link to='/cadastro' onClick={() => setProjeto(item.id)} className='urnas'>{item.id}</Link>
                            <FaTrashRestore color='#FF0000' size={22} style={{ position: 'relative', cursor: 'pointer', height: 100 }} onClick={() => handleDeleteProjeto(item.id)} />
                        </div>
                    ))
                }




            </div>


            {openModal &&
                <Modal onClose={() => setOpenModal(false)}>
                    <input type="text"
                        placeholder='Nome do projeto'
                        value={projeto}
                        onChange={(e) => setProjeto(e.target.value)}
                    />
                    <Button className="btn-salvar" onClick={handleSalvarProjeto}>Salvar</Button>

                </Modal>}
        </div>
    )
}

export default Projeto