import React from 'react'
import SideBar from '../SideBar/SideBar'
import Pie_Chart from '../Charts/Pie';
import Line_Chart from '../Charts/Line';
import './Campagin.css'

const Campagin = () => {
  return (
    <div className='container'>
    <div className='sideBar_holder'>
        <SideBar/>
    </div>
    <div>
    <div className='name-holder'>
      <h1>الحملات
      </h1>
    </div>
    <div className='charts_holder'>
      <Pie_Chart/>
      <Line_Chart/>
 </div>
 <div className='camp-holder'>
    <div className='camp-input'>
        <input type='text' placeholder='اسم الحملة' className='camp-inputs'/>
        <input type='text' placeholder='وصف الحملة' className='camp-inputs'/>
        <button className='camp-button'>حفظ</button>
    </div>
    <div className='camp-view'>
    <table class="table">
                <thead>
                    <tr>
                        <th class="py-2 border">اسم الحملة</th>
                        <th class="py-2 border">وصف الحملة</th>
                        <th class="py-2 border"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2">Ali</td>
                        <td class="border px-4 py-2">دفع</td>
                        <td class="border px-4 py-2">
                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
 </div>
 </div>
</div>
  )
}

export default Campagin