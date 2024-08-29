import React, { useState, useEffect } from 'react';
import './Campgain.css';
import SideBar from '../SideBar/SideBar';
const handleSubmit = () => {
    alert('تم الانتساب')
}
const Campaign = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch the token from localStorage
        const token = localStorage.getItem('token');

        // Fetch campaigns data from the API
        fetch('http://127.0.0.1:8000/api/campaigns', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                // Filter out unnecessary fields
                const filteredCampaigns = data.map(campaign => ({
                    id: campaign.id,
                    name: campaign.name,
                    description: campaign.description,
                    target_amount: campaign.target_amount,
                    current_amount: campaign.current_amount,
                    start_date: campaign.start_date,
                    end_date: campaign.end_date,
                }));
                setCampaigns(filteredCampaigns);
            })
            .catch(error => {
                console.error('Error fetching campaigns:', error);
            });
    }, []);



    return (

        <div className='user-contaier'>
            <SideBar />
            <div className="card-container">   {/* //key={campaign.id}>*/}
                <div className="card">
                    <div className="content">
                        <h2 className="title1">حملة الجمعية </h2>
                        <div className="title2"> أخر حملة ل جمعيتنا كانت تهدف الى<br /> تحسين العلاقة بين المتبرع والمستفيد <br /> عن طريق تتبع التبرعات</div>
                        <div className="description">
                            <h2>تفاصيل الحملة</h2>
                            <ul>
                                <li>الفئة المستهدفة: المحتاجين ذو وضع صغب</li>
                                <li >المدة:
                                    {/* {Math.round((new Date(campaign.end_date) - new Date(campaign.start_date)) / (1000 * 60 * 60 * 24))}*/}

                                    شهرين
                                </li>
                                <li>الهدف من الحملة :ضمان المتبرع ل جمعيتنا ومساعدة الناس بشكل خاص</li>
                            </ul>
                        </div>
                        <button onClick={handleSubmit} className='card-submit'>
                            انتساب الى الحملة
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Campaign;



{/*
import './Campgain.css';
import SideBar from '../SideBar/SideBar';

const Campaign = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch the token from localStorage
        const token = localStorage.getItem('token');

        // Fetch campaigns data from the API
        fetch('http://127.0.0.1:8000/api/campaigns', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                // Filter out unnecessary fields
                const filteredCampaigns = data.map(campaign => ({
                    id: campaign.id,
                    name: campaign.name,
                    description: campaign.description,
                    target_amount: campaign.target_amount,
                    current_amount: campaign.current_amount,
                    start_date: campaign.start_date,
                    end_date: campaign.end_date,
                }));
                setCampaigns(filteredCampaigns);
            })
            .catch(error => {
                console.error('Error fetching campaigns:', error);
            });
    }, []);

    return (
        <div className='user-container'>
            <SideBar />
            <div className="card-container">
                {campaigns.map(campaign => (
                    <div className="card" key={campaign.id}>
                        <div className="content">
                            <h2 className="title1">{campaign.name}</h2>
                            <div className="title2">{campaign.description}</div>
                            <div className="description">
                                <h2>تفاصيل الحملة</h2>
                                <ul>
                                    <li>الفئة المستهدفة: المحتاجين ذو وضع صعب</li>
                                    <li>المدة: {Math.round((new Date(campaign.end_date) - new Date(campaign.start_date)) / (1000 * 60 * 60 * 24))} أيام</li>
                                    <li>الهدف من الحملة: {campaign.target_amount} ريال</li>
                                </ul>
                            </div>
                            <button onClick={handleSubmit} className='card-submit'>
                                انتساب الى الحملة
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const handleSubmit = () => {
    alert('تم الانتساب');
}

export default Campaign;

    
    
    
    
    */}