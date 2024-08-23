import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';


const Line_Chart = () => {

    
    const data = [
        { name: 'Mar', revenue: 2000 },
        { name: 'May', revenue: 1000 },
        { name: 'Jul', revenue: 4000 },
        { name: 'Sep', revenue: 3000 },
        { name: 'Nov', revenue: 5000 },
        { name: 'Jan', revenue: 1500 },
    ];
    
    
  return (
    <div className="line-chart">
     <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> 
      </div>
  )
}

export default Line_Chart