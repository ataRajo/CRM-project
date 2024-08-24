import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Requests from './Requests/Requests';
import Track from './Track/Track';
import Doners from './Doners/Doners';
import Campagin from './Campagin/Campagin';
import Recipcient from './Recipcient/Recipcient';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/campagin' element={<Campagin />} />
      <Route path='/doner' element={<Doners />} />
      <Route path='/track' element={<Track talab='تم تقديم طلب التبرع' />} />
      <Route path='/request' element={<Requests />} />
      <Route path='/Recipcient' element={<Recipcient />} />
    </Routes>

  )
}

{/*
  recipcient : addd interfface rec
  
  */}




{/*

      <Route path="/" element={Dashboard}></Route>
      <Route path="/campagin" element={<Campagin />}>/>
      <Route path="/doner" element={Doners}></Route>
      <Route path='/track' element={Track}></Route>
      <Route path="/request" element={Requests}></Route>
      <Route path="/Recipcient" element={Recipcient}></Route>
*/ }
export default App
