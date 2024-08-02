import React from 'react';
import './DonorsStatus.css';

// Sample data for donors and their last donations
const donors = [
    { name: 'John Doe', status: 'Active', lastDonation: { amount: '$500', date: '2024-07-01' } },
    { name: 'Jane Smith', status: 'Inactive', lastDonation: { amount: '$250', date: '2024-06-15' } },
    { name: 'Sam Wilson', status: 'Active', lastDonation: { amount: '$300', date: '2024-07-20' } },
    { name: 'Alex Brown', status: 'Inactive', lastDonation: { amount: '$150', date: '2024-05-30' } },
];

const DonorsStatus = () => {
    return (
        <div className="container">
            <h1 className='Dl'>Donor List</h1>
            <ul className="donor-list">
                {donors.map((donor, index) => (
                    <li key={index}>
                        <span className="donor-name">{donor.name}</span>
                        <span className={`donor-status ${donor.status === 'Inactive' ? 'inactive' : ''}`}>
                            {donor.status}
                        </span>
                        <span className="donor-amount">{donor.lastDonation.amount}</span>
                        <span className="donor-date">{donor.lastDonation.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DonorsStatus;


{/* DonorsStatus*/ }