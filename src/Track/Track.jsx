import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import Pie_Chart from '../Charts/Pie';
import Line_Chart from '../Charts/Line';
import './Track.css'

const Track = ({ talab }) => {

  const [markedIndex, setMarkedIndex] = useState(0);
  const handleClick = (index) => {
    setMarkedIndex(index);
  };

  return (
    <div className='container'>
      <div className='sideBar_holder'>
        <SideBar />
      </div>
      <div>
        <div className='name-holder'>
          <h1>المتابعة
          </h1>
        </div>
        <div className='charts_holder'>
          <Pie_Chart />
          <Line_Chart />
        </div>
        <div class="card1">
          <div className='dot-container'>
            <div className='dot' style={{ backgroundColor: markedIndex >= 1 ? '#435798' : 'white' }} onClick={() => setMarkedIndex(1)}></div>
            <p>{talab}</p>
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
  )
}

export default Track

