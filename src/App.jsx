import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Requests from './Requests/Requests';
import Track from './Track/Track';
import Doners from './Doners/Doners';
import Campagin from './Campagin/Campagin';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      {/* <Route path="/" Component={Landing}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/signup" Component={Signup}></Route>
      <Route path="/admin" Component={AdminDashboard}></Route>
      <Route path="/visitor" Component={VisitorDashboad}></Route> */}
      <Route path="/" Component={Dashboard}></Route>
      <Route path="/campagin" Component={Campagin}></Route>
      <Route path="/doner" Component={Doners}></Route>
      <Route path='/track' Component={Track}></Route>
      <Route path="/request" Component={Requests}></Route>
    </Routes>
  </Router>

  )
}

export default App
