import { Route, Routes, Redirect } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
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


Amplify.configure(awsExports);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
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
            <Route path='/' element={isAuthenticated ? <Redirect to='/ListarUsuario' /> : <Home />} />
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
