// src/Campaign.js
import React from 'react';
import './Campgain.css';


const Campaign = () => {
    return (
        <div className="campaign-container">
            <h1 className="campaign-title">CRM Campaign</h1>
            <p className="campaign-description">
                Our latest campaign aims to<br /> enhance customer relationships <br /> by leveraging advanced CRM tools.
            </p>
            <div className="campaign-details">
                <h2>Campaign Details</h2>
                <ul>
                    <li>Target Audience: Existing Customers</li>
                    <li>Duration: 3 Months</li>
                    <li>Goals: Increase customer satisfaction and retention</li>
                </ul>
            </div>
        </div>
    );
};

export default Campaign;