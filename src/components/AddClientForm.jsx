import React, { useState } from 'react';

const AddClientForm = ({ addClient }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [industry, setIndustry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newClient = { name, email, industry };
        addClient(newClient);
        setName('');
        setEmail('');
        setIndustry('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="industry">Industry:</label>
                <input
                    type="text"
                    id="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Client</button>
        </form>
    );
};

export default AddClientForm;