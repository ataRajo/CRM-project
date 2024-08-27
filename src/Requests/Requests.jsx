import React from 'react'
import SideBar from '../SideBar/SideBar'
import Pie_Chart from '../Charts/Pie'
import Line_Chart from '../Charts/Line'
import './Requests.css'

const Requests = () => {
    return (
        <div className='container'>
            <div className='sideBar_holder'>
                <SideBar />
            </div>
            <div>
                <div className='name-holder'>
                    <h1>الطلبات
                    </h1>
                </div>
                {/*
                    <div className='charts_holder'>
                    <Pie_Chart />
                    <Line_Chart />
                </div>
                */}

                <div className='table-holder'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="py-2 border">المستخدم</th>
                                <th class="py-2 border">المستفيد</th>
                                <th class="py-2 border">نوع التبرع</th>
                                <th class="py-2 border">تاريخ التبرع</th>
                                <th class="py-2 border">المبلغ</th>
                                <th class="py-2 border">الحالة</th>
                                <th class="py-2 border"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-4 py-2">علي</td>
                                <td class="border px-4 py-2">أحمد</td>
                                <td class="border px-4 py-2">عملية</td>
                                <td class="border px-4 py-2">2024/11/15</td>
                                <td class="border px-4 py-2">500$</td>
                                <td class="border px-4 py-2">فعال</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" className="form-control">
                                            <option value='Accept'>موافق</option>
                                            <option value='Pending'>انتظار</option>
                                            <option value='Decline'>غير موافق</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">تم</button>
                                    </form>
                                </td>
                            </tr>

                            <tr>
                                <td class="border px-4 py-2">علي</td>
                                <td class="border px-4 py-2">علي</td>
                                <td class="border px-4 py-2">نقود</td>
                                <td class="border px-4 py-2">2024/2/15</td>
                                <td class="border px-4 py-2">100$</td>
                                <td class="border px-4 py-2">غير فعال</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>موافق</option>
                                            <option value='Pending'>انتظار</option>
                                            <option value='Decline'>غير موافق</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">تم</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">فارس</td>
                                <td class="border px-4 py-2">ملهم</td>
                                <td class="border px-4 py-2">نقود</td>
                                <td class="border px-4 py-2">2024/9/15</td>
                                <td class="border px-4 py-2">250$</td>
                                <td class="border px-4 py-2">فعال</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>موافق</option>
                                            <option value='Pending'>انتظار</option>
                                            <option value='Decline'>غير موافق</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">تم</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">فارس</td>
                                <td class="border px-4 py-2">فارس</td>
                                <td class="border px-4 py-2">عملية</td>
                                <td class="border px-4 py-2">2024/1/15</td>
                                <td class="border px-4 py-2">200$</td>
                                <td class="border px-4 py-2">غير فعال</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>موافق</option>
                                            <option value='Pending'>انتظار</option>
                                            <option value='Decline'>غير موافق</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">تم</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">سيف</td>
                                <td class="border px-4 py-2">عمر</td>
                                <td class="border px-4 py-2">عملية</td>
                                <td class="border px-4 py-2">2024/5/15</td>
                                <td class="border px-4 py-2">100$</td>
                                <td class="border px-4 py-2">غير فعال</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>موافق</option>
                                            <option value='Pending'>انتظار</option>
                                            <option value='Decline'>غير موافق</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">تم</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">صابر</td>
                                <td class="border px-4 py-2">رامي</td>
                                <td class="border px-4 py-2">نقود</td>
                                <td class="border px-4 py-2">2024/2/15</td>
                                <td class="border px-4 py-2">350$</td>
                                <td class="border px-4 py-2">فعال</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>موافق</option>
                                            <option value='Pending'>انتظار</option>
                                            <option value='Decline'>غير موافق</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">تم</button>
                                    </form>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Requests