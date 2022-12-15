import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {FiLogOut} from 'react-icons/fi'
import { signOut} from 'firebase/auth'
import { auth } from '../../firebaseConnection';
import './menu.css'
function Menu() {

  async function logout(){
    await signOut(auth)
    .then(()=>{
      console.log("Logout realizado");
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='menu-lateral'>
                <img className='imgLogo' src={logo} alt="" />
                <Link className="linkMenu" to='/'>HOME</Link>
                <Link className="linkMenu" to='/projeto'>PROJETO</Link>
                <Link className="linkMenu" to='/sobre'>SOBRE</Link>
                <FiLogOut className="logout" size={28} color="#FF0000" onClick={logout}/>
           </div>
  )
}

export default Menu