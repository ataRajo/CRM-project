import React from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Rectangle, AreaChart, Area } from 'recharts';
import SideBar from '../SideBar/SideBar'
import Pie_Chart from '../Charts/Pie';
import './Dashboard.css';
import Line_Chart from '../Charts/Line';

const Dashboard = () => {

   

  return (
    <div className='container'>
        <div className='sideBar_holder'>
            <SideBar/>
        </div>
        <div>
        <div className='name-holder'>
          <h1>لوحة التحكم
          </h1>
        </div>
        <div className='charts_holder'>
          <Pie_Chart/>
          <Line_Chart/>
     </div>
     </div>
</div>
  )
}

export default Dashboard