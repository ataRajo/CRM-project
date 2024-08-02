import React from 'react';
import './Recipcienst.css';

const RecipientDetails = ({ recipient }) => {
    return (
        <div className="recipient-details">
            <h2>{recipient.name}'s Received Donations</h2>
            <ul>
                {recipient.received.map((received, index) => (
                    <li key={index} className="received-item">
                        <span className="recipient-amount">{received.amount}</span>
                        <span className="recipient-date">{received.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipientDetails;
