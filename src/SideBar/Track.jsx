{/*
    import React, { useState } from 'react';
import './Track.css';
import { Link } from 'react-router-dom';
const App = () => {
    const [assistants, setAssistants] = useState([
        { id: 1, name: 'Alice', type: '150$', status: 'Sent' },
        { id: 2, name: 'Bob', type: 'Heart surgery$', status: 'recived' },
        { id: 3, name: 'Ata', type: '50$', status: 'pending' },

    ]);

    const updateStatus = (id, newStatus) => {
        setAssistants(assistants.map(
            assistant => assistant.id === id ? { ...assistant, status: newStatus } : assistant
            // في حال شلنا النقاط بروح الاسم بعد تعديل الحالة
        ));
    };

    return (
        <div className="app-container">
            <h1>Assistant Tracker</h1>
            <div className="tracking-list">
                {assistants.map(assistant => (
                    <div key={assistant.id} className="tracking-item">
                        <span>{assistant.name}</span>
                        <span>{assistant.type}</span>
                        <select
                            value={assistant.status}
                            onChange={(e) => updateStatus(assistant.id, e.target.value)} //console.log(e.target.value))} //mshan t3dil el 7aleh
                        >
                            <option value="Sent">Sent</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Received">Received</option>
                        </select>
                    </div>

                ))}
                <Link to="/DonorsStatus"><button type='submit'>Save</button> </Link>
            </div>
        </div>
    );
};

export default App;

    
    
    */ }



import React from 'react';
import './Track.css';
import { useState } from 'react';
const Track = () => {
    //  how many circles will be rendered.  Number of circles to display
    const numberOfCircles = 4;
    const [markedIndex, setMarkedIndex] = useState(0);
    const handleClick = (index) => {
        setMarkedIndex(index);
    };
    <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
    return (


        <div className="line-container">
            {/*  Array.from({ length: numberOfCircles }): 
            Creates an array with numberOfCircles elements. Array.from is used here to generate an array with
             a specific length.

             .map generates JSX for each circle based on the index.

            */ }

            {Array.from({ length: numberOfCircles }).map((_, index) => (
                <div
                    key={index}
                    className={`circle ${index === markedIndex ? 'marked' : ''}`}
                    //تغيير الوان الدوائر

                    onClick={() => handleClick(index)}
                />

            ))}

        </div>

    );
};

export default Track;
