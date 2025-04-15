import React from 'react';

const ClientList = ({ clients }) => {
    return (
        <>
            <h2>Client List</h2>
            <ul>
                {clients.map((client, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {client.name}, <strong>Email:</strong> {client.email}, <strong>Industry:</strong> {client.industry}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ClientList;