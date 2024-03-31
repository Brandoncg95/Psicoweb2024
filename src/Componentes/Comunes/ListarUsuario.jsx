// ListarUsuario.jsx

import React, { useState, useEffect } from 'react';

function ListarUsuario() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://qr79p2yd3c.execute-api.sa-east-1.amazonaws.com/getUsers')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

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
