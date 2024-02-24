import { Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import React from 'react';
import Sitenave from './Componentes/Comunes/Sitenave.jsx';
import SiteFooter from './Componentes/Comunes/SiteFooter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import Home from './Componentes/Comunes/Home.jsx';
import Login from './Componentes/auth/Login.jsx';
import Registro from './Componentes/auth/Registro.jsx';
import Contactos from './Componentes/Contactos/Contactos.jsx';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
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
      )}
    </Authenticator>
  );
}

export default App;