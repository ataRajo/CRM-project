import './DonationResponseForm.css'
import React, { useState } from 'react';
const DonationResponseForm = () => {
    const [response, setResponse] = useState(null);

    const handleAccept = () => {
        setResponse('accepted');
        console.log('Donation accepted');
    };

    const handleDecline = () => {
        setResponse('declined');
        console.log('Donation declined');
    };

    return (
        <div className="response-container">
            <h2>CRM Donation Response</h2>
            <div className="response-buttons">
                <button className="accept-button" onClick={handleAccept}>
                    Accept
                </button>
                <button className="decline-button" onClick={handleDecline}>
                    Decline
                </button>
            </div>
            {response && (
                <p className={`response-message ${response}`}>
                    You have {response} the donation.
                </p>
            )}
        </div>
    );
};

export default DonationResponseForm;
