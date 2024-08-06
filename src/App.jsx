
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar/SideBar'
import Requests from './SideBar/Requests'
import './App.css';
// import RecordDonations from './SideBar/RecordDonations';
import Donors from './SideBar/Donors';
import Recipcienst from './SideBar/Recipcienst';
import DonorStatus from './SideBar/DonorsStatus';
// import FinancalAcc from './SideBar/FinancalAcc';
import Track from './SideBar/Track';
import { useState } from 'react';
import ReportForm from './FinancialManager/ReportForm';
import ReportList from './FinancialManager/ReportList';
import DashS from './DashS';
import Campgain from './SideBar/Campgain';
import CampaignList from './SideBar/CampgainList';







const App = () => {
  const [reports, setReports] = useState([]);
  const addReport = (report) => {
    setReports([...reports, report]);
  };

  const [campaigns, setCampaigns] = useState([]);
  const addCampaign = (campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  return (

    <div className="cont">

      <div className="App">
        <ReportForm addReport={addReport} />
        <ReportList reports={reports} />

      </div>



      {/*
      <div className='CAmpg'>
         <Campgain addCampaign={addCampaign} />
      <CampaignList campaigns={campaigns} />

      </div>
    
    */ }


      <div className='dash'>
        <DashS />
      </div>

      <div className='campList'>
        <CampaignList campaigns={campaigns} />

        <div className='components'>

          <Routes>

            <Route path='/' element={<Sidebar Request=' الطلبات'
              Track='تتبع التبرع'
              Record='تسجيل للتبرع'
              Campgain='حملة تبرعية'
              Donors='المتطوعين'
              Recipcienst='المستفيدين'
              financialAccount='الحساب المالي'
              Status='نشاط المتبرعين'

            />} />
            <Route path="/requests" element={<Requests header="الطلبات"
              nameO="اسم الطلب"
              Dorder="مقدم الطلب"
              stateO="حالة الطلب"
              typeO="نوع الطلب"
            />} />

            <Route path="/Donors" element={<Donors
              list='DonorList'
              Dtype='DonorType'
              Date='DonorDate'
            />} />

            <Route path="/Recipcienst" element={<Recipcienst
              RecipientList='RecipientList'
            />} />

            <Route path='/DonorsStatus' element={<DonorStatus
              DonorList='Donor List'
            />} />
            <Route path='/Track' element={<Track />} />
            <Route path='/ReportForm' element={<ReportForm />} />
            <Route path='/ReportList' element={<ReportList />} />

            <Route path='/Campgain' element={<Campgain addCampaign={addCampaign} />} />


            {/* يمكنك إضافة مسارات أخرى هنا */}
          </Routes>
        </div>
      </div>


    </div>
  );
}

export default App;

{/* reqD : statstics interface
  statstics : updating the  stastics */ }