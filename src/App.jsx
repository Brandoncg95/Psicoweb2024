import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Sitenave from './Componentes/Comunes/Sitenave.jsx';
import SiteFooter from './Componentes/Comunes/SiteFooter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componentes/Comunes/Home.jsx';
import Login from './Componentes/auth/Login.jsx';
import Registro from './Componentes/auth/Registro.jsx';
import Contactos from './Componentes/Contactos/Contactos.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sitenave />
        <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Contactos' element={<Contactos />} />
        </Routes>
        <SiteFooter />
      </div>
    </>
  )
}

export default App; 
