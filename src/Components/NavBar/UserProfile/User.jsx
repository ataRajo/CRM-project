import React, { useState, useEffect } from 'react';
import './User.css';
import { BsEnvelopeFill, BsBellFill, BsCircleFill } from "react-icons/bs";
import man from '../photo/man.jpg';
import SideBar from '../../SideBar/SideBar';

const User = () => {
    const [user, setUser] = useState(null);
    const [donations, setDonations] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [unreadCount, setUnreadCount] = useState(3); // Example count
    const [isActive, setIsActive] = useState(true); // Assume the user is initially active

    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    // Fetch user info and donations on component mount
    useEffect(() => {
        // Fetch user info
        fetch('http://127.0.0.1:8000/api/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}` // Attach the token to the request
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user info");
                }
                return response.json();
            })
            .then(data => {
                setUser(data); // Set the user data
            })
            .catch(error => {
                console.error("There was an error fetching the user info!", error);
            });

        // Fetch donations
        fetch('http://127.0.0.1:8000/api/my-donations', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}` // Attach the token to the request
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch donations");
                }
                return response.json();
            })
            .then(data => {
                setDonations(data); // Set the donations data
            })
            .catch(error => {
                console.error("There was an error fetching the donations!", error);
            });
    }, [token]);

    const handleMouseEnterNotifications = () => {
        setShowNotifications(true);
    };

    const handleMouseLeaveNotifications = () => {
        setShowNotifications(false);
    };

    const handleMouseEnterStatus = () => {
        setShowStatus(true);
    };

    const handleMouseLeaveStatus = () => {
        setShowStatus(false);
    };

    const markAllAsRead = () => {
        setUnreadCount(0);
    };

    const changeStatus = () => {
        setIsActive(!isActive);
    };

    if (!user) {
        return <p>Loading...</p>; // Loading state while fetching user data
    }

    return (
        <div className='user-contaier'>
            <SideBar />
            <div className="donor-profile">
                <div className="donor-header">
                    <img src={man} alt="User Avatar" />
                    <div className="donor-bio">
                        <h2>{user.username}</h2> {/* Display username instead of name */}
                    </div>
                    <div className="donor-contact">
                        <p><BsEnvelopeFill size={20} />
                            <p>{user.email}</p> {/* Display user email */}
                        </p>
                    </div>
                    <div className="donor-actions">
                        <div
                            className="icon-button"
                            onMouseEnter={handleMouseEnterNotifications}
                            onMouseLeave={handleMouseLeaveNotifications}
                        >
                            <BsBellFill size={20} />
                            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
                            {showNotifications && (
                                <div className="dropdown-list">
                                    <p>Notification 1</p>
                                    <p>Notification 2</p>
                                    <p>Notification 3</p>
                                    <p onClick={markAllAsRead}>Mark all as read</p>
                                </div>
                            )}
                        </div>
                        <div
                            className="icon-button"
                            onMouseEnter={handleMouseEnterStatus}
                            onMouseLeave={handleMouseLeaveStatus}
                        >
                            <BsCircleFill size={20} style={{ color: isActive ? 'green' : 'red' }} />
                            {showStatus && (
                                <div className="dropdown-list">
                                    <p onClick={changeStatus}>Toggle Status</p>
                                    <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='space'></div>
                <h3 className='donations-header'>التبرعات السابقة</h3>
                <div className="donor-donations">
                    <table className="donations-table">
                        <thead>
                            <tr>
                                <th>Donation ID</th>
                                <th>Recipient Name</th>
                                <th>Donation Type</th>
                                <th>Donation Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation) => (
                                <tr key={donation.DonationID}>
                                    <td>{donation.DonationID}</td>
                                    <td>{donation.recipientName}</td>
                                    <td>{donation.donationTypeName}</td>
                                    <td>{donation.DonationDate}</td>
                                    <td>{donation.Amount}$</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;
