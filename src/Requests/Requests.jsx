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
                <div className='charts_holder'>
                    <Pie_Chart />
                    <Line_Chart />
                </div>
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
                                <td class="border px-4 py-2">Ali</td>
                                <td class="border px-4 py-2">Ahmad</td>
                                <td class="border px-4 py-2">surgery</td>
                                <td class="border px-4 py-2">2024/11/15</td>
                                <td class="border px-4 py-2">500$</td>
                                <td class="border px-4 py-2">Active</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" className="form-control">
                                            <option value='Accept'>Accept</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Decline'>Decline</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                                    </form>
                                </td>
                            </tr>

                            <tr>
                                <td class="border px-4 py-2">alaa</td>
                                <td class="border px-4 py-2">yousef</td>
                                <td class="border px-4 py-2">Money</td>
                                <td class="border px-4 py-2">2024/2/15</td>
                                <td class="border px-4 py-2">100$</td>
                                <td class="border px-4 py-2">InActive</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>Accept</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Decline'>Decline</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">fares</td>
                                <td class="border px-4 py-2">molham</td>
                                <td class="border px-4 py-2">Money</td>
                                <td class="border px-4 py-2">2024/9/15</td>
                                <td class="border px-4 py-2">250$</td>
                                <td class="border px-4 py-2">Active</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>Accept</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Decline'>Decline</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">belal</td>
                                <td class="border px-4 py-2">jalal</td>
                                <td class="border px-4 py-2">surgery</td>
                                <td class="border px-4 py-2">2024/1/15</td>
                                <td class="border px-4 py-2">200$</td>
                                <td class="border px-4 py-2">InActive</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>Accept</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Decline'>Decline</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">saif</td>
                                <td class="border px-4 py-2">omar</td>
                                <td class="border px-4 py-2">surgery</td>
                                <td class="border px-4 py-2">2024/5/15</td>
                                <td class="border px-4 py-2">100$</td>
                                <td class="border px-4 py-2">InActive</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>Accept</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Decline'>Decline</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">Update</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">saber</td>
                                <td class="border px-4 py-2">rami</td>
                                <td class="border px-4 py-2">Money</td>
                                <td class="border px-4 py-2">2024/2/15</td>
                                <td class="border px-4 py-2">350$</td>
                                <td class="border px-4 py-2">Active</td>
                                <td class="border px-4 py-2">
                                    <form action="{{ route('admin.donations.updateStatus', $donation->DonationID) }}" method="POST">
                                        <select name="status" class="form-control">
                                            <option value='Accept'>Accept</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Decline'>Decline</option>
                                        </select>
                                        <button type="submit" class="btn btn-primary mt-2">Update</button>
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