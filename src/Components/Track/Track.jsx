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
            <div className='explain'>

                <p className='first'>the  <br /> Request Done </p>
                <p className='sec'>Accepted <br />By The Crm</p>
                <p className='third'>on the <br />....way</p>
                <p className='fourth'>The Donation <br />  !! Arrived  </p>

                {/*
                 <h1>Thanks for Your Donation  </h1>
                */}
            </div>

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
