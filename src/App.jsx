import { Route, Routes, useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { signOut } from '@aws-amplify/auth';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports'; // Si la configuración automática no funciona, descomenta esta línea
import React, { useEffect, useState } from 'react';
import Sitenave from './Componentes/Comunes/Sitenave.jsx';
import SiteFooter from './Componentes/Comunes/SiteFooter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import Home from './Componentes/Comunes/Home.jsx';
import Login from './Componentes/auth/Login.jsx';
import Registro from './Componentes/auth/Registro.jsx';
import Contactos from './Componentes/Contactos/Contactos.jsx';
import ListarUsuario from './Componentes/Comunes/ListarUsuario.jsx';

// Amplify.configure(awsExports); // Remueve esta línea si la configuración automática funciona

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Utilize useNavigate hook for redirection

  useEffect(() => {
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    try {
      await Auth.currentSession(); // Actualización a Amplify 6.0.17
      setIsAuthenticated(true);
      navigate('/ListarUsuario'); // Redirect upon successful authentication
    } catch (error) {
      setIsAuthenticated(false);
    }
  }

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <div>
          <Sitenave />
          <Routes>
            <Route path='/' element={<Home />} /> {/* No conditional rendering here */}
            <Route path='/Login' element={<Login />} />
            <Route path='/Registro' element={<Registro />} />
            <Route path='/Contactos' element={<Contactos />} />
            <Route path='/ListarUsuario' element={<ListarUsuario />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
}

export default App;