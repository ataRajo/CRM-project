import React, { useState } from 'react';
import './Track.css';
import SideBar from '../SideBar/SideBar';
const Track = () => {
    //  how many circles will be rendered.  Number of circles to display
    const numberOfCircles = 4;
    const [markedIndex, setMarkedIndex] = useState(0);
    const handleClick = (index) => {
        setMarkedIndex(index);
    };
    // <div>
    //     <div class="wave"></div>
    //     <div class="wave"></div>
    //     <div class="wave"></div>
    // </div>
    return (

        <div className='user-contaier'>
            <SideBar />
            <div class="card1-container">
                <div class="card1">
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 1 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(1)}></div>
                        <p>تم تقديم طلب التبرع</p>
                        <hr style={{ backgroundColor: markedIndex > 1 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 2 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(2)}></div>
                        <p>تمت الموافقة </p>
                        <hr style={{ backgroundColor: markedIndex > 2 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 3 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(3)}></div>
                        <p>في حالة انتظار</p>
                        <hr style={{ backgroundColor: markedIndex > 3 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 4 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(4)}></div>
                        <p>تمت بنجاح</p>
                    </div>
                </div>
            </div>
        </div>


        // <div className="line-container">
        //     {/*  Array.from({ length: numberOfCircles }): 
        //     Creates an array with numberOfCircles elements. Array.from is used here to generate an array with
        //      a specific length.

        //      .map generates JSX for each circle based on the index.

        //     */ }
        //     <div className='explain'>

        //         <p className='first'>  <br />تم تقديم طلب التبرع</p>
        //         <p className='sec'>تمت الموافقة <br /> من قبل الجمعية</p>
        //         <p className='third'>في حالة انتظار</p>
        //         <p className='fourth'>عمليةالتبرع <br />وصلت !! </p>

        //         {/*
        //          <h1>Thanks for Your Donation  </h1>
        //         */}
        //     </div>

        //     {Array.from({ length: numberOfCircles }).map((_, index) => (
        //         <div
        //             key={index}
        //             className={`circle ${index === markedIndex ? 'marked' : ''}`}
        //             //تغيير الوان الدوائر

        //             onClick={() => handleClick(index)}
        //         />

        //     ))}

        // </div>

    );
};

export default Track;
