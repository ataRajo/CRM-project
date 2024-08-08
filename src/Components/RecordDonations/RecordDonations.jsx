import React, { useState } from 'react';
import './RecordDonations.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


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

            <input className='search' type='search' placeholder='RecepcientName' />
            <span> <FaSearch /></span>
            <h1 className="donation-title">تقديم طلب للتبرع</h1>
            <form className="donation-form" onSubmit={handleSubmit}>
                <label className="form-label">اسم المتبرع:</label>
                <input
                    type="text"
                    className="form-input"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                />
                <label className='Rec' for="people">اختيار مستفيد</label>
                <select id="peoples">
                    <option value="Ahmad">أحمد</option>
                    <option value="ALI">علي</option>
                    <option value="Mohamad">محمد</option>
                    <option value="Mahmoud">محمود</option>
                </select>

                <label className="form-label" for='type'>القيمة:</label>
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />

                <select id="typeD">
                    <option value="Money">نقود</option>
                    <option value="Surgery">عمليات</option>
                </select>
                <label htmlFor="donationDate">تاريخ التبرع:</label>
                <input
                    type="date"
                    id="donationDate"
                    value={donationDate}
                    onChange={(e) => setDonationDate(e.target.value)}
                    required
                />

                <label className="form-label">الرسالة:</label>
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

