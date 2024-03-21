import React from 'react'
import Navbar from '../Navbar/Navbar'

const Dashboard = ({showSidebar, setShowSidebar}) => {
  return (
    <div className={`${showSidebar ? "" : "lg:ml-[300px]"} w-full`}>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  )
}

export default Dashboard