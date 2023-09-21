import React from 'react'
import Nav from './Sections/Nav'
import Drawer from './Sections/Drawer'
import TodaySales from './Sections/DashboardHome/TodaySales'
import TotalRevenue from './Sections/DashboardHome/TotalRevenue'
import TopProducts from './Sections/DashboardHome/TopProducts'

const DashboardHome = () => {
  return (
    <div className='p-8'>
        <TodaySales></TodaySales>
        <TotalRevenue></TotalRevenue>
        <TopProducts></TopProducts>

    </div>
  )
}

export default DashboardHome
