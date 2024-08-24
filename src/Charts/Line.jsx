import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';


const Line_Chart = () => {


  const data = [
    { name: '2020', revenue: 2000 },
    { name: '2021', revenue: 1000 },
    { name: '2022', revenue: 4000 },
    { name: '2023', revenue: 3000 },
    { name: '2024', revenue: 5000 },
    { name: '2025', revenue: 1500 },
  ];


  return (

    <div className="line-chart">
      <ResponsiveContainer>
        <div className='e7s2yat'>
          <span>عدد المتبرعين خلال السنوات</span>
        </div>

        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#000" fill="#8884d8" /> {/* STROKE : COLOR EL 7AWAF
                                                                                      FILL : COLOR EL MO5TAT   */}
        </AreaChart>
      </ResponsiveContainer>
    </div>

  )
}
{/**
    xAxisTickFormatter(date) {
    return moment.unix(date).format('YYYY');
  }
  */}

export default Line_Chart