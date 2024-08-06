import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dash.css';

const data = [
    { name: 'Mar 2024', revenue: 2000 },
    { name: 'May 2024', revenue: 1000 },
    { name: 'Jul 2024', revenue: 4000 },
    { name: 'Sep 2024', revenue: 3000 },
    { name: 'Nov 2024', revenue: 5000 },
    { name: 'Jan 2024', revenue: 1500 },
];

const pieData = [
    { name: 'In-Progress Deals', value: 40.9 },
    { name: 'Closed Deals', value: 31.8 },
    { name: 'New Leads', value: 27.3 },
];

const COLORS = ['#42A5F5', '#FF7043', '#66BB6A'];

const DashS = () => {
    return (
        <div className="dashboard-container">
            <div className="main-content">
                <h1>CRM Dashboard</h1>
                <div className="content">
                    <div className="sales-performance">
                        <h2>Sales Performance</h2>
                        <div className="metrics">
                            <div>
                                <h3>Total Customers</h3>
                                <p>2468</p>
                            </div>
                            <div>
                                <h3>Active Users</h3>
                                <p>1254</p>
                            </div>
                            <div>
                                <h3>Sales Revenue</h3>
                                <p>5,320</p>
                            </div>
                        </div>
                        <div className="chart">
                            <p>Total Revenue Over Time</p>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="customer-engagement">
                        <h2>Customer Engagement</h2>
                        <div className="pie-chart">
                            <ResponsiveContainer width="100%" height={300}>
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
                            <ul>
                                <li><span className="blue"></span>In-Progress Deals (40.9%)</li>
                                <li><span className="orange"></span>Closed Deals (31.8%)</li>
                                <li><span className="green"></span>New Leads (27.3%)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashS;
