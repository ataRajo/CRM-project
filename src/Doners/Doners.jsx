import React from 'react'
import SideBar from '../SideBar/SideBar'
import Pie_Chart from '../Charts/Pie';
import Line_Chart from '../Charts/Line';

const Doners = () => {
  return (
    <div className='container'>
      <div className='sideBar_holder'>
        <SideBar />
      </div>
      <div>
        <div className='name-holder'>
          <h1>المتبرعون
          </h1>
        </div>
        <div className='charts_holder'>
          <Pie_Chart />
          <Line_Chart />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="py-2 border">اسم المتبرع</th>
              <th class="py-2 border">نوع التبرع</th>
              <th class="py-2 border">تاريخ التبرع</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">عطا</td>
              <td class="border px-4 py-2">دفع</td>
              <td class="border px-4 py-2">23-5-2024  </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">علي</td>
              <td class="border px-4 py-2">عملية</td>
              <td class="border px-4 py-2">20-5-2024  </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Doners