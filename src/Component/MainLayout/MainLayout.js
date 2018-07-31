import React from 'react'

import SideBar from '../SideBar/SideBar';

const MainLayout = ({ title, children }) =>
  <div className="MainLayout">
    <SideBar />
    <div className='viewContent'>
      <h1>{title}</h1>
      {children ? children : ''}
    </div>
  </div>

export default MainLayout