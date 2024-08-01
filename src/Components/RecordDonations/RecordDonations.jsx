import React, { useState } from 'react';
import './RecordDonations.css';
import { Link } from 'react-router-dom';
const RecordDonations = () => {
    const [donorName, setDonorName] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [donationDate, setDonationDate] = useState('');
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
            <h1 className="donation-title">Request a Donation</h1>
            <form className="donation-form" onSubmit={handleSubmit}>
                <label className="form-label">Donor Name:</label>
                <input
                    type="text"
                    className="form-input"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                />
                <label className='Rec' for="people">Choose one Recipcient  </label>
                <select id="peoples">
                    <option value="Ahmad">Ahmad</option>
                    <option value="ALI">ALI</option>
                    <option value="Mohamad">Mohamad</option>
                    <option value="Mahmoud">Mahmoud</option>
                </select>

                <label className="form-label" for='type'>Amount:</label>
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />

                <select id="typeD">
                    <option value="Surgery">Surgery</option>
                    <option value="Money">Money</option>
                </select>
                <label htmlFor="donationDate">Donation Date:</label>
                <input
                    type="date"
                    id="donationDate"
                    value={donationDate}
                    onChange={(e) => setDonationDate(e.target.value)}
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

