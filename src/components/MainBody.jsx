import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'


const MainBody = () => {
  return (
    <>
    <Header />
    <div className='flex mt-2 w-auto'>
        <SideBar />
        {<Outlet />}
    </div>
      
    </>
  )
}

export default MainBody
