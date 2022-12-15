import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import CadastroUser from './pages/CadastroUser';
import Projeto from './pages/Projeto';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Private from './routes/Private';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/cadastrouser',
    element: <CadastroUser/>
  },
  {
    path: '/projeto',
    element: <Private><Projeto/></Private>
  },
  {
    path: '/cadastro',
    element: <Private><Cadastro/></Private>
  },
  {
    path: '/sobre',
    element: <Sobre/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export {router};