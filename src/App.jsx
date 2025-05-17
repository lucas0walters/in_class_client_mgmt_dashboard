import React, { useState, useEffect } from 'react';
import AddClientForm from './components/AddClientForm';
import IndustryFilter from './components/IndustryFilter';
import ClientList from './components/ClientList';

const App = () => {
  const [clients, setClients] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const addClient = (newClient) => {
    setClients(prevClients => [...prevClients, newClient]);
  };

  const filterByIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  const filteredClients = selectedIndustry
    ? clients.filter(client => client.industry === selectedIndustry)
    : clients;

  // Only add example clients once on mount
  useEffect(() => {
    const exampleClients = [
      { name: 'John Doe', email: 'john.doe@example.com', industry: 'Technology' },
      { name: 'Nick Fletcher', email: 'nick@brightgrid.com', industry: 'Finance' },
      { name: 'Alice Johnson', email: 'alice.johnson@example.com', industry: 'Healthcare' },
      { name: 'Rocky D. Bull', email: 'rocky@usf.edu', industry: 'Education' }
    ];
    setClients(exampleClients);
  }, []);

  return (
    <div>
      <h1>Client Management Dashboard</h1>
      <AddClientForm addClient={ addClient } />
      <IndustryFilter
        clients={clients}
        selectedIndustry={selectedIndustry}
        filterByIndustry={filterByIndustry}
      />
      <ClientList clients={filteredClients} />
    </div>
  );
};

export default App;