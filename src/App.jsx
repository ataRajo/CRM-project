import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Register from './Components/NavBar/Register'
import Log from './Components/NavBar/Log'
import About from './Components/NavBar/About'
import User from './Components/NavBar/UserProfile/User'
import RecordDonations from './Components/RecordDonations/RecordDonations'
import Campaign from './Components/Campgain/Campaign'
import Track from './Components/Track/Track'
import Logout from './Components/Logout'
import Messages from './Components/Messages/Messages'
import TrackDonor from './Components/TrackDonor/TrackDonor'
import TrackCampaign from './Components/TrackDCampaign/TrackCampaign'
import PaymentCard from './Components/PaymentCard/PaymentCard'





const App = () => {
  const donor = {
    name: 'علي الاحمد',
    avatar: '',
    bio: 'رجل أعمال',
    email: 'aliahmada@gmail.com',
    phone: '0935498289',
    donations: [
      'تبرع ل مشاكل صحية في القلب -$500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
      'تبرع ل مشاكل صحية في القلب - $500',
      'تبرع ل اكمال التعليم - $300',
      ' تبرع من خلال النقود- $200',
    ]
  }

  return (

    <div className='App'>
      <Routes>
        <Route path='/' element={<NavBar />} />

        <Route path='/About' element={<About />} />


        <Route path='/Register' element={<Register />} />


        <Route path='/LogIn' element={<Log />} />
        <Route path='/User' element={<User donor={donor} />} />
        <Route path='/user/Record' element={<RecordDonations />} />
        <Route path='/user/Campgain' element={<Campaign />} />
        <Route path='/user/Track' element={<Track />} />
        <Route path='/user/Messages' element={<Messages />} />
        <Route path='/user/TrackDonor' element={<TrackDonor />} />
        <Route path='/user/TrackCampaign' element={<TrackCampaign />} />
        <Route path='/user/Pay' element={<PaymentCard donationId="1" amount="100.00" date="24/8 2024" />} />
      </Routes>

    </div>
  )
}

export default App
{/*
   update (first commit) :build the project in a simple way 
  commit v3 : updates on interfaces
  commit v4: create user card and put data inside it 
  Commit update : created user profile wuth his dash
  Commit v1 : completed the side bar and change between the pages
  Commit Log :move from log out to log in
  commit Messages : added Messages interface with Routing :)
  commit icon : added the icon in front of search bar (not pinned)
  commit alert : alert when we click on btn
  commoit persPhoto : add an image to user proflie 
  commit online :added (online) infront of blue circle
  commitDesign : commit updating design "css" of user dashboard :
  commit notification : put line inside the notification
  */ }