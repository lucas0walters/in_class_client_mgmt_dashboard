import React from 'react';

const ClientList = ({ clients }) => {
    return (
        <>
            <h2>Client List</h2>
            <div className="client-table-container">
                <table className="client-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Industry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.industry}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ClientList;