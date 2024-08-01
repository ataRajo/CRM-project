import React, { useState } from 'react';
import './RecordDonations.css';
import { Link } from 'react-router-dom';
const RecordDonations = () => {
    const [donorName, setDonorName] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to send data to your CRM system
        console.log('Donor Name:', donorName);
        console.log('Amount:', amount);
        console.log('Message:', message);
        setDonorName('');
        setAmount('');
        setMessage('');
        alert('Donation recorded successfully!');

    };

    return (
        <div className="donation-container">
            <h1 className="donation-title">Record a Donation</h1>
            <form className="donation-form" onSubmit={handleSubmit}>
                <label className="form-label">Donor Name:</label>
                <input
                    type="text"
                    className="form-input"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                />

                <label className="form-label">Amount:</label>
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />

                <label className="form-label">Message:</label>
                <textarea
                    className="form-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit" className="form-button">Submit Donation</button>

            </form>
        </div>

    );
};

export default RecordDonations;

