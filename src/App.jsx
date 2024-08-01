import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Register from './Components/NavBar/Register'
import Log from './Components/NavBar/Log'
import About from './Components/NavBar/About'
import User from './Components/NavBar/UserProfile/User'
import RecordDonations from './Components/RecordDonations/RecordDonations'
import Campaign from './Components/Campgain/Campgain'
import Track from './Components/Track/Track'





const App = () => {
  const donor = {

    name: 'Ata Rajouleh',
    avatar: 'https://via.placeholder.com/60',
    bio: 'community supporter',
    email: 'atarajouleh7@gmail.com',
    phone: '0935498289',
    donations: [
      'Donation to Health Fund - $500',
      'Donation to Education Fund - $300',
      'Donation to Community Fund - $200',
    ]
  }
  return (

    <div className='Container'>
      <NavBar />
      <Routes>

        <Route path='/About' element={<About
          info="اهلا وسهلا بكم في جمعية الهداية الاسلامية "
          details='
        تقع هذه الجمعية في العاصمة دمشق خلف ملعب نادي الوحدة
        وهي جمعية غير ربحية
         تأسست لمساعدة الفقراء على اجراء العمليات الجراحية والتبرعات المادية للناس الذين يحتاجون الى 
         أموال 
        تأسست الجمعية عام 1930 
        ومن اللافت أن جمعيتنا هي من اوائل الجمعيات في دمشق ونم اشهارها في عام 1970 
        ومازالت مستمرة في عملها الأساسي مع التوسع الطبي 

        في الجانب الصحي والطبي والمادي ....
        كما تقدم تغطية كاملة لأهالي المنطقة 
ان مؤسس هذه الجمعية هو الشيخ محمود ياسين وتولى رئاستها مدة عشرين عاما تقريبا

مدير الجمعية في وقتنا الحالي هو السيد عادل التكريتي 
        '
        />} />


        <Route path='/Register' element={<Register
          reg="انشاء حساب"
          explain="انشىء حسابك الأن لدى الجمعية"
          first="الاسم الأول"
          last="الأسم الثاني"
          email="أدخل بريدك الالكتروني"
          password="أدخل كلمة السر"
          confirm="تأكد من كلمة السر التي وضعتها"
          sub="النقر"
          already="هل لديك حساب من قبل ؟"
          sign="سجل الدخول الان"
        />} />


        <Route path='/LogIn' element={<Log
          title="تسجيل الدخول"
          labelU="الحساب"
          labelp="كلمة السر"
          info="انشاء حساب"
          Lin="تسجيل الدخول"
        />} />
        <Route path='/User' element={<User donor={donor} />} />
        <Route path='/user/Record' element={<RecordDonations />} />
        <Route path='/user/Campgain' element={<Campaign />} />
        <Route path='/user/Track' element={<Track />} />
      </Routes>

      {
      }
    </div>
  )
}

export default App
{/*Commit update : created user profile wuth his dash*/ }