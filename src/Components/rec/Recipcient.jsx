import React, { useEffect, useState } from 'react';
import './Recipcient.css';
import SideBar from '../SideBar/SideBar';

const Recipcient = () => {
    const [recipients, setRecipients] = useState([]);

    useEffect(() => {
        const fetchRecipients = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve the token from local storage

                const response = await fetch('http://127.0.0.1:8000/api/recipients', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch recipients');
                }

                const data = await response.json();

                // Format the data to match the structure needed for display
                const formattedRecipients = data.map(recipient => ({
                    name: recipient.name,
                    email: recipient.ContactInfo,
                    description: recipient.NeedDescription
                }));

                setRecipients(formattedRecipients);
            } catch (error) {
                console.error('Error fetching recipients:', error);
            }
        };

        fetchRecipients();
    }, []);

    return (

        <div className='container'>
            <div className='user-contaier'>
                <SideBar />

                <div className='Recipcient'>
                    <table className="recipient-table">
                        <thead>
                            <tr>
                                <th className="header-cell">اسم المستفيد </th>
                                <th className="header-cell">البريد الالكتروني</th>
                                <th className="header-cell">الوصف</th>
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
