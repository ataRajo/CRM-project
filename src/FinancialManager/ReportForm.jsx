import React, { useState } from 'react';
import './ReportForm.css';

const ReportForm = ({ addReport }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            const newReport = {
                title,
                content,
                date: new Date().toLocaleDateString()
            };
            addReport(newReport);
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="report-form">
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Generate Report</button>
        </form>
    );
};

export default ReportForm;
