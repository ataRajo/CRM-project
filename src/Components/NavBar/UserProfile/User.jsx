import React, { useState } from 'react';
import './User.css';
import { BsFillTelephoneFill, BsEnvelopeFill, BsBellFill, BsCircleFill } from "react-icons/bs";
import man from '../photo/man.jpg';
import SideBar from '../../SideBar/SideBar';

const User = ({ donor }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [unreadCount, setUnreadCount] = useState(3); // Example count
    const [isActive, setIsActive] = useState(true); // Assume the user is initially active

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

    return (
        <div className='user-contaier'>
            <SideBar />
            <div className="donor-profile">
                <div className="donor-header">
                    <img src={man} alt="Donor Avatar" />
                    <div className="donor-bio">
                        <h2>{donor.name}</h2>
                        <p>{donor.bio}</p>
                    </div>
                    <div className="donor-contact">
                        <p><BsEnvelopeFill size={20} />
                            <span>{donor.email}</span>
                        </p>
                        <p><BsFillTelephoneFill size={20} />
                            <span>{donor.phone}</span></p>
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
                    <ul>
                        {donor.donations.map((donation, index) => (
                            <li key={index}>{donation}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;
