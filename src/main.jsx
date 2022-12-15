import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContextProvider from './components/Context/contexApi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <ToastContainer autoClose={1500} />
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextProvider>
)
