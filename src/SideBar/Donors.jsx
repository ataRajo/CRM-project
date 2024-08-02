import React from 'react';
import './Donors.css';

const donors = [
    { name: 'John Doe', amount: '$100', date: '2023-07-01' },
    { name: 'Jane Smith', amount: '$150', date: '2023-07-02' },
    { name: 'Michael Brown', amount: '$250', date: '2023-07-04' },
    { name: 'Jessica Williams', amount: '$300', date: '2023-07-05' },
    { name: 'Ata Rajouleh', amount: 'heart surgery', date: '2024-09-02' },
    { name: 'Mouaz Al Khawam', amount: 'lung surgery', date: '2024-09-22' },

];

const Donors = () => {
    return (
        <div className="container">
            <div className='anaween'>
                <h2>Donor List</h2>
                <h2>Donor Type</h2>
                <h2>Date of Donor</h2>
            </div>

            <ul className="donor-list">
                {donors.map((donor, index) => (
                    <li key={index}>
                        <span className="donor-name">{donor.name}</span>
                        <span className="donor-amount">{donor.amount}</span>
                        <span className="donor-date">{donor.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Donors;
