import React, { useState } from 'react';
import './TrackDonor.css';
import SideBar from '../SideBar/SideBar';
const TrackDonor = () => {
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
            <div class="card1-container">
                <div class="card1">
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 1 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(1)}></div>
                        <p>متبرع غير فعال</p>
                        <hr style={{ backgroundColor: markedIndex > 1 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 2 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(2)}></div>
                        <p>رواد العطاء </p>
                        <hr style={{ backgroundColor: markedIndex > 2 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 3 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(3)}></div>
                        <p>داعمون للنمو</p>
                        <hr style={{ backgroundColor: markedIndex > 3 ? '#435798' : 'white' }} />
                    </div>
                    <div className='dot-container'>
                        <div className='dot' style={{ backgroundColor: markedIndex >= 4 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(4)}></div>
                        <p>قادة التغيير</p>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default TrackDonor;
