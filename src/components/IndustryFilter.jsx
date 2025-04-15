import React from 'react';

const IndustryFilter = ({ filterByIndustry }) => {
    const handleChange = (event) => {
        filterByIndustry(event.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value="">All</option>
            <option value="Finance">Finance</option>
            <option value="Tech">Tech</option>
            <option value="Retail">Retail</option>
        </select>
    );
};

export default IndustryFilter;