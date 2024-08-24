import React, { useState } from 'react';
import './TrackCampaign.css';
import SideBar from '../SideBar/SideBar';
const TrackCampaign = () => {
    //  how many circles will be rendered.  Number of circles to display
    const numberOfCircles = 4;
    const [markedIndex, setMarkedIndex] = useState(1);
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
            <div className="card1-container">
                <div className="card1">
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 1 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(1)}></div>
                        <p>متبرع غير فعال</p>
                        <hr style={{ backgroundColor: markedIndex > 1 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 2 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(2)}></div>
                        <p> متبرع وسط</p>
                        <hr style={{ backgroundColor: markedIndex > 2 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 3 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(3)}></div>
                        <p>متبرع فعال</p>
                        <hr style={{ backgroundColor: markedIndex > 3 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 4 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(4)}></div>
                        <p>متبرع مميز</p>
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

export default TrackCampaign;
