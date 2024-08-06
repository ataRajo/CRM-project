import React from 'react';
import './CampgianList.css';

const CampaignList = ({ campaigns }) => {
    return (
        <div className="campaign-list">
            <h2>Campaigns</h2>
            {campaigns.map((campaign, index) => (
                <div key={index} className="campaign-item">
                    <h3>{campaign.name}</h3>
                    <p>{campaign.description}</p>
                    <p className="date">{campaign.date}</p>
                </div>
            ))}
        </div>
    );
};

export default CampaignList;
