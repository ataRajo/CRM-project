{/*
  
  import React from 'react'
import Sidebar from './SideBar/SideBar'
import Requests from './SideBar/Requests'

const App = () => {
  return (
    <div>
      <Sidebar />
      <Requests />
    </div>
  )
}

export default App
  */ }
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './dashAdmin/SideBar';
import Requests from './dashAdmin/Requests';
import Campaign from './dashAdmin/Campgain';
import Donors from './dashAdmin/Donors';
import Recipcienst from './dashAdmin/Recipcienst';
import DonorsStatus from './dashAdmin/DonorsStatus';
import Track from './dashAdmin/Track';
import DonationResponseForm from './dashAdmin/DonationResponseForm';






// import RecordDonations from './SideBar/RecordDonations';
// import FinancalAcc from './SideBar/FinancalAcc';

{/*
  
import { LiaAddressBookSolid } from "react-icons/lia";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdRequestPage } from "react-icons/md";
import { GrStatusWarning } from "react-icons/gr";
import { FcInfo } from "react-icons/fc";
import { MdEventAvailable } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { PiStepsFill } from "react-icons/pi";
import { FaPenToSquare } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  */ }


const App = () => {

  return (
    <div className="cont">
      <div className='icons'>
        {/*
<LiaAddressBookSolid className='Facc' />
        <FaPeopleRobbery className='Donrs' />
        <MdRequestPage className='pay' />
        <FcInfo className='info' />
        <GrStatusWarning className='status' />
        <MdEventAvailable className='event' />
        <MdEmojiPeople className='takers' />
        <MdAccountCircle className='Faccount' />
        <PiStepsFill className='steps' />
*/ }

      </div>

      <div className="content">
        <Routes>

          <Route path='/' element={<Sidebar Request=' الطلبات'
            Track='تتبع التبرع'
            Record='تسجيل للتبرع'
            Campgain='حملة تبرعية'
            Donors='المتطوعين'
            Recipcienst='المستفيدين'
            financialAccount='الحساب المالي'
            Status='نشاط المتبرعين'
            Response='حالة الطلب'
          />} />
          <Route path="/requests" element={<Requests header="الطلبات"
            nameO="اسم الطلب"
            Dorder="مقدم الطلب"
            stateO="حالة الطلب"
            typeO="نوع الطلب"
          />} />


          <Route path="/Campgain" element={<Campaign />} />

          {/*
                <Route path="/Record" element={<RecordDonations />} />
          <Route path='/financialAccount' element={<FinancalAcc />} />

              */ }


          <Route path="/Donors" element={<Donors />} />
          <Route path="/Recipcienst" element={<Recipcienst />} />
          <Route path='/DonorsStatus' element={<DonorsStatus />} />
          <Route path='/Track' element={<Track />} />
          <Route path='/DonationForm' element={<DonationResponseForm />} />

          {/* يمكنك إضافة مسارات أخرى هنا */}
        </Routes>
      </div>
    </div >


  );
}

export default App;