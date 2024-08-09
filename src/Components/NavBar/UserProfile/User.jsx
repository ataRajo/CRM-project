
/*
import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
const User = ({ name, bio }) => {
    return (
        <div className='userc'>

            <div className='dashuser'>
                <nav>
                    <ul>

                        <li><Link to='./Track'>Track</Link></li>
                        <li><Link to='./Campgain'>Campgain</Link></li>
                        <li><Link to='./Contact'>ContactUs</Link></li>
                        <li><Link to='./Messages'>Messages</Link></li>

                    </ul>

                </nav>
            </div>

            <div className="user-profile">
                <div className="avatar">
                    <img alt="User Avatar" />
                </div>
                <div className="user-info">
                    <h2>{name}</h2>
                    <p>{bio}</p>
                </div>
            </div>
        </div>

    )
}

export default User


*/


import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import photo from '../photo/charity.jpg'
import man from '../photo/man.jpg'

const User = ({ donor }) => {
    return (

        <div className="donor-profile">
            <div className='dashuser'>

                <nav>
                    <ul>

                        <li><Link to='./Track'>Track</Link></li>
                        <li><Link to='./Campgain'>Campgain</Link></li>
                        <li><Link to='https://www.facebook.com/alhidayacharity/'>ContactUs</Link></li>
                        <li><Link to='./Messages'>Messages</Link></li>
                        <li><Link to='./Record'>Record</Link></li>
                        <li><Link to='./Logout'>Logout</Link></li>


                    </ul>

                </nav>
            </div>

            <div className="donor-header">
                <img className='iconCharity' src={photo} alt='Cahrity Photo' />
                <div className="animated-circle"></div>

                <img src={man} alt="Donor Avatar" className="donor-avatar" />
                <h2>{donor.name}</h2>
            </div>
            <div className="donor-bio">
                <p>{donor.bio}</p>
            </div>
            <div className="donor-contact">
                <h3>معلومات التواصل :</h3>
                <p className='uinfo'>Email: {donor.email}</p>
                <p className='uinfo'>Phone: {donor.phone}</p>
            </div>
            <div className="donor-donations">
                <h3>التبرعات السابقة</h3>
                <ul>
                    {donor.donations.map((donation, index) => (
                        <li key={index}>{donation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default User;



