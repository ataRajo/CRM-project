
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar/SideBar'
import Requests from './SideBar/Requests'
import './App.css';
import Campaign from './SideBar/Campgain';
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







const App = () => {
  const [reports, setReports] = useState([]);
  const addReport = (report) => {
    setReports([...reports, report]);
  };
  return (

    <div className="cont">
      <div className="App">
        <ReportForm addReport={addReport} />
        <ReportList reports={reports} />

      </div>



      <div className='dash'>
        <DashS />
      </div>
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


          <Route path="/Campgain" element={<Campaign />} />
          <Route path="/Donors" element={<Donors />} />
          <Route path="/Recipcienst" element={<Recipcienst />} />
          <Route path='/DonorsStatus' element={<DonorStatus />} />
          <Route path='/Track' element={<Track />} />
          <Route path='/ReportForm' element={<ReportForm />} />
          <Route path='/ReportList' element={<ReportList />} />

          {/* يمكنك إضافة مسارات أخرى هنا */}
        </Routes>
      </div>

    </div>
  );
}

export default App;