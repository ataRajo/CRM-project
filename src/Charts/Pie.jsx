import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Pie_Chart = () => {

    const pieData = [
        { name: 'الداعمين الغير الفعالين ', value: 40.9, color: 'red' },
        { name: 'الداعمين الوسط', value: 31.8, color: 'orange' },
        { name: 'الداعمين  فعالين', value: 27.3, color: 'green' },
    ];

    const COLORS = ['#FF0000', '#FF7043', '#66BB6A'];

    return (
        <div className="pie-chart">
            <h2>احصائيات الداعمين</h2>

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
                    <li key={index} className={data.color}>{`${data.name} (${data.value}%)`}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pie_Chart