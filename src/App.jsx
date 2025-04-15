import React, { useState } from 'react';
import AddClientForm from './components/AddClientForm';
import IndustryFilter from './components/IndustryFilter';
import ClientList from './components/ClientList';

const App = () => {
  const [clients, setClients] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const addClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const filterByIndustry = (industry) => {
    setSelectedIndustry(industry);
  };

  const filteredClients = selectedIndustry
    ? clients.filter(client => client.industry === selectedIndustry)
    : clients;

  return (
    <div>
      <h1>Client Management Dashboard</h1>
      <AddClientForm addClient={ addClient } />
      <IndustryFilter selectedIndustry={selectedIndustry} filterByIndustry={filterByIndustry} />
      <ClientList clients={filteredClients} />
    </div>
  );
};

export default App;