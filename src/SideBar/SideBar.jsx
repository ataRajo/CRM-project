import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import './Requests.jsx'
import './Campgain.jsx'

// import './RecordDonations.jsx'
import './Donors.jsx'
import './Recipcienst.jsx'
import './DonorsStatus.jsx'
// import './FinancalAcc.jsx'
const Sidebar = ({ Request, Track, Campgain, Donors, Recipcienst, Status }) => {
    return (
        <div className="sidebar">
            <ul>
                {/*
                  {navItems.map((element, index) => {
                    return (
                        <><li key={index}><Link to="/requests">{element.Request}</Link></li>
                            <li key={index}><Link to="/track">{element.Track}</Link></li>
                            <li key={index}><Link to="/Record">{element}</Link></li>
                            <li key={index}><Link to="/Campgain">{element}</Link></li>
                            <li key={index}><Link to="/Donors">{element}</Link></li>
                            <li key={index}> <Link to="/Recipcienst">{element}</Link></li>
                            <li key={index}><Link to="/financialAccount">{element}</Link></li>
                            <li key={index}><Link to="/DonorsStatus">{element}</Link></li></>

                    )
                })}
                */}

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

                {/* يمكنك إضافة عناصر أخرى هنا */}
            </ul>
        </div>
    );
}

export default Sidebar;