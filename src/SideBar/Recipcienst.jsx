import React, { useState } from 'react';
import RecipientDetails from './RecipientDetails';
import './Recipcienst.css';

const recipients = [
    { name: 'Alice Green', received: [{ amount: '$100', date: '2024-07-01' }, { amount: '$200', date: '2024-08-01' }] },
    { name: 'Bob White', received: [{ amount: '$150', date: '2024-07-02' }, { amount: '$250', date: '2024-08-05' }] },
    { name: 'Charlie Black', received: [{ amount: '$200', date: '2024-07-03' }, { amount: '$300', date: '2024-08-10' }] },
    { name: 'Dana Blue', received: [{ amount: '$250', date: '2024-07-04' }, { amount: '$350', date: '2024-08-15' }] },
    { name: 'Eve Red', received: [{ amount: '$300', date: '2024-07-05' }, { amount: '$400', date: '2024-08-20' }] },
];

const Recipcienst = () => {
    const [selectedRecipient, setSelectedRecipient] = useState(null);

    const handleClick = (recipient) => {
        setSelectedRecipient(recipient);
    };

    return (
        <div className="container">
            <h1>Recipient List</h1>
            <ul className="recipient-list">
                {recipients.map((recipient, index) => (
                    <li key={index} onClick={() => handleClick(recipient)}>
                        <span className="recipient-name">{recipient.name}</span>
                        <span className="recipient-amount">
                            {recipient.received.reduce((total, received) => total + parseInt(received.amount.slice(1)), 0)}$
                        </span>
                    </li>
                ))}
            </ul>
            {selectedRecipient && <RecipientDetails recipient={selectedRecipient} />}
        </div>
    );
};

export default Recipcienst;
