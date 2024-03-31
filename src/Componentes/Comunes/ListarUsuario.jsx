import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListarUsuario() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://qr79p2yd3c.execute-api.sa-east-1.amazonaws.com/getUsers')
            .then(response => setUsers(response.data))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div>Error al cargar los usuarios: {error.message}</div>;
    }

    return (
        <div>
            <h1>Listado de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarUsuario;