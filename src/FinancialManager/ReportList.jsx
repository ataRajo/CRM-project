import React from 'react';
import './ReportList.css';

const ReportList = ({ reports }) => {
    return (
        <div className="report-list">
            {reports.map((report, index) => (
                <div key={index} className="report">
                    <h2>{report.title}</h2>
                    <p>{report.content}</p>
                    <p className="date">{report.date}</p>
                </div>
            ))}
        </div>
    );
};

export default ReportList;
