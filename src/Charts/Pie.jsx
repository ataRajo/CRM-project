import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';

const Pie_Chart = () => {

    const pieData = [
        { name: 'In-Progress Deals', value: 40.9, color: 'blue' },
        { name: 'Closed Deals', value: 31.8, color: 'orange' },
        { name: 'New Leads', value: 27.3, color: 'green' },
    ];
    
    const COLORS = ['#42A5F5', '#FF7043', '#66BB6A'];

  return (
    <div className="pie-chart">
    <ResponsiveContainer className='responsive'>
        <PieChart>
            <Pie
             data={pieData}
             cx="50%"
             cy="50%"
             labelLine={false}
             outerRadius={100}
             fill="#8884d8"
             dataKey="value"
            >
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
    <ul className='pie-data'>
        {pieData.map((data, index) => (
            <li className={data.color}>{`${data.name} (${data.value}%)`}</li>
        ))}
    </ul>
 </div>
  )
}

export default Pie_Chart