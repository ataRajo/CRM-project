import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import './Requests.jsx'
import './Campgain.jsx'

// import './RecordDonations.jsx'
import './Donors.jsx'
import './Recipcienst.jsx'
import './DonorsStatus.jsx'
import DonationResponseForm from './DonationResponseForm.jsx';
// import './FinancalAcc.jsx'
const Sidebar = ({ Request, Track, Campgain, Donors, Recipcienst, Status, Response }) => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/requests">{Request}</Link></li>
                <li><Link to="/track">{Track}</Link></li>
                {/*   
                 <li><Link to="/Record">{Record}</Link></li>
                <li><Link to="/financialAccount"> {financialAccount}</Link></li>
                */ }
                <li><Link to="/Campgain">{Campgain}</Link></li>
                <li><Link to="/Donors">{Donors} </Link></li>
                <li><Link to="/Recipcienst">{Recipcienst}</Link></li>
                <li><Link to="/DonorsStatus"> {Status}</Link></li>
                <li><Link to="/DonationForm">{Response}</Link></li>

                {/* يمكنك إضافة عناصر أخرى هنا */}
            </ul>
        </div>
    );
}

export default Sidebar;