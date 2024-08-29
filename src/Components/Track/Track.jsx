
import React, { useState, useEffect } from 'react';
import './Track.css';
import SideBar from '../SideBar/SideBar';
const Track = () => {
    //  how many circles will be rendered.  Number of circles to display
    const numberOfCircles = 4;
    const [markedIndex, setMarkedIndex] = useState(0);
    const [donations, setDonations] = useState([]);
    const token = localStorage.getItem('token')
    const handleClick = (index) => {
        setMarkedIndex(index);
    };

    useEffect(() => {
        // Fetch the donations from the API
        const fetchDonations = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/my-donations', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setDonations(data);
                } else {
                    console.error('Failed to fetch donations');
                }
            } catch (error) {
                console.error('Error fetching donations:', error);
            }
        };

        fetchDonations();
    }, [token]);
    {/*
    
    
    */}
    return (

        <div className='user-contaier'>
            <SideBar />
            <div key={donations.DonationID} className="card1-container">
                <div className="card1">
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 1 ? '#435798' : 'white' }} ></div>
                        <p>تم تقديم طلب التبرع</p>
                        <hr style={{ backgroundColor: markedIndex > 1 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 2 ? '#435798' : 'white' }} ></div>
                        <p>تمت الموافقة </p>
                        <hr style={{ backgroundColor: markedIndex > 2 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 3 ? '#435798' : 'white' }} ></div>
                        <p>في حالة انتظار</p>
                        <hr style={{ backgroundColor: markedIndex > 3 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 4 ? '#435798' : 'white' }} ></div>
                        <p>تمت بنجاح</p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Track;
{/*
    import React, { useState, useEffect } from 'react';
import './Track.css';
import SideBar from '../SideBar/SideBar';

const Track = () => {
    const [donations, setDonations] = useState([]);
    const token = localStorage.getItem('token'); // Get token from local storage

    useEffect(() => {
        // Fetch the donations from the API
        const fetchDonations = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/my-donations', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setDonations(data);
                } else {
                    console.error('Failed to fetch donations');
                }
            } catch (error) {
                console.error('Error fetching donations:', error);
            }
        };

        fetchDonations();
    }, [token]);

    // Function to determine the color of the dots based on the status
    const getDotColors = (status) => {
        const colors = ['white', 'white', 'white', 'white']; // Default color for all dots
        switch (status) {
            case 'pending':
                colors[0] = 'red';
                break;
            case 'denied':
                colors[1] = 'red';
                break;
            case 'confirmed':
                colors[1] = 'green';
                colors[2] = 'green';
                break;
            case 'received':
                colors[1] = 'green';
                colors[2] = 'green';
                colors[3] = 'green';
                break;
            default:
                break;
        }
        return colors;
    };

    return (
        <div className='user-container'>
            <SideBar />
            {donations.map((donation) => {
                const dotColors = getDotColors(donation.Status);

                return (
                    <div key={donation.DonationID} className="card1-container">
                        <div className="card1">
                            <div className='dot-container'>
                                <div
                                    className='dot'
                                    style={{ backgroundColor: dotColors[0] }}
                                ></div>
                                <p>تم تقديم طلب التبرع</p>
                                <hr style={{ backgroundColor: dotColors[1] !== 'white' ? '#435798' : 'white' }} />
                            </div>
                            <div className='dot-container'>
                                <div
                                    className='dot'
                                    style={{ backgroundColor: dotColors[1] }}
                                ></div>
                                <p>تمت الموافقة</p>
                                <hr style={{ backgroundColor: dotColors[2] !== 'white' ? '#435798' : 'white' }} />
                            </div>
                            <div className='dot-container'>
                                <div
                                    className='dot'
                                    style={{ backgroundColor: dotColors[2] }}
                                ></div>
                                <p>في حالة انتظار</p>
                                <hr style={{ backgroundColor: dotColors[3] !== 'white' ? '#435798' : 'white' }} />
                            </div>
                            <div className='dot-container'>
                                <div
                                    className='dot'
                                    style={{ backgroundColor: dotColors[3] }}
                                ></div>
                                <p>تمت بنجاح</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Track;
    */}