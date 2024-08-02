import React from 'react';
import './Requests.css'
{/*
import { FaPenToSquare } from "react-icons/fa6";

<FaPenToSquare className='pen' />    
    */}
import { FaPen } from 'react-icons/fa'; // Importing the pen icon from Font Awesome via React Icons


const Requests = ({ header, nameO, Dorder, stateO, typeO }) => {
    const requests = [
        { name: 'طلب 1', applicant: 'مقدم 1', status: 'مقبول', type: 'نوع 1' },
        { name: 'طلب 2', applicant: 'مقدم 2', status: 'معلق', type: 'نوع 2' },
        { name: 'طلب 3', applicant: 'مقدم 3', status: 'مرفوض', type: 'نوع 3' },

    ];

    return (
        <div className='Card'>

            <FaPen className='pen' size={15} color="#fff" />
            <FaPen size={15} color="#fff" className='pen1' />
            <FaPen size={15} color="#fff" className='pen2' />
            <FaPen size={15} color="#fff" className='pen3' />
            <FaPen size={15} color="#fff" className='pen4' />
            <FaPen size={15} color="#fff" className='pen5' />
            <FaPen size={15} color="#fff" className='pen6' />
            <FaPen size={15} color="#fff" className='pen7' />
            <FaPen size={15} color="#fff" className='pen8' />



            <div className="requests">
                <h1>{header}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>{nameO}</th>
                            <th>{Dorder}</th>
                            <th>{stateO}</th>
                            <th>{typeO}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.name}</td>
                                <td>{request.applicant}</td>
                                <td>{request.status}</td>
                                <td>{request.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );

}

export default Requests;