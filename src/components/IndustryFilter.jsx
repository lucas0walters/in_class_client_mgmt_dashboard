import React from 'react';

const IndustryFilter = ({ clients, selectedIndustry, filterByIndustry }) => {
    // Get unique industries from the clients array
    const industries = Array.from(new Set(clients.map(client => client.industry))).filter(Boolean);

    return (
        <select value={selectedIndustry} onChange={e => filterByIndustry(e.target.value)}>
            <option value="">All</option>
            {industries.map(industry => (
                <option key={industry} value={industry}>
                    {industry}
                </option>
            ))}
        </select>
    );
};

export default IndustryFilter;