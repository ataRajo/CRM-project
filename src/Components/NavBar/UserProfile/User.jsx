import React from 'react';
import './User.css';
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import man from '../photo/man.jpg'
import SideBar from '../../SideBar/SideBar';

const User = ({ donor }) => {
    return (
        <div className='user-contaier'>
            <SideBar/>
                <div className="donor-profile">

            <div className="donor-header">

                <img src={man} alt="Donor Avatar" />
            <div className="donor-bio">
                <h2>{donor.name}</h2>
                <p>{donor.bio}</p>
            </div>
            <div className="donor-contact">
                {/* <h3>معلومات التواصل :</h3> */}
                <p><BsEnvelopeFill size={20}/>
                <spn>{donor.email}</spn>
                </p>
                <p><BsFillTelephoneFill size={20}/>
                <spn>{donor.phone}</spn></p>
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



