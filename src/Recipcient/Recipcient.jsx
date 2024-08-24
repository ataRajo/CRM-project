import React from 'react';
import './Recipcient.css';
import SideBar from '../SideBar/SideBar'
import Pie_Chart from '../Charts/Pie';
import Line_Chart from '../Charts/Line';
// Sample data for recipients
const recipients = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        description: 'Friend from college',
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        description: 'Work colleague',
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        description: 'Gym buddy',
    },
    // Add more recipient objects as needed
];

// Table component
const Recipcient = () => {
    return (
        <div className='container'>
            <div className='sideBar_holder'>
                <SideBar />
            </div>
            <div>
                <div className='name-holder'>
                    <h1>المستفيدين</h1>
                </div>
                <div className='charts_holder'>
                    <Pie_Chart />
                    <Line_Chart />
                </div>
                <div className='Recipcient'>
                    <table className="recipient-table">
                        <thead>
                            <tr>
                                <th className="header-cell">Recipient Name</th>
                                <th className="header-cell">Email</th>
                                <th className="header-cell">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipients.map((recipient, index) => (
                                <tr key={index} className={index % 2 ? 'row-odd' : 'row-even'}>
                                    <td className="table-cell">{recipient.name}</td>
                                    <td className="table-cell">{recipient.email}</td>
                                    <td className="table-cell">{recipient.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recipcient;
