import React from 'react';
import './PaymentCard.css';
import SideBar from '../SideBar/SideBar';
const PaymentCard = ({ donationId, amount, date }) => {
    return (

        <div className='user-contaier'>
            <SideBar />
            <div className="donation-card">

                <h1>تفاصيل التبرع</h1>
                <div className="card-content">
                    <p><strong> رقم التبرع:</strong> {donationId}</p>
                    <p><strong>القيمة :</strong> ${amount}</p>
                    <p><strong>التاريخ:</strong> {date}</p>
                </div>
                <div className="thank-you">
                    !!!شكرا على تبرعكم وتفانيكم المخلص
                </div>
            </div>
        </div>
    );
}

export default PaymentCard;
