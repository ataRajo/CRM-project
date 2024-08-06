import React, { useState } from 'react';
import './Campgain.css';
import { Link } from 'react-router-dom';
const Campgain = ({ addCampaign }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const newCampgain = (e) => {
        e.preventDefault();
        addCampaign({
            name,
            description,
            date: new Date().toLocaleDateString()
        });


        setName('');
        setDescription('');

    };

    return (
        <form className="containerC" onSubmit={newCampgain}>
            <input
                type="text"
                placeholder="Campaign Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Campaign Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Create Campaign</button>
        </form>
    );
};

export default Campgain;
