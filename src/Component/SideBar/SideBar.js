import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () =>
  <div className="bar">
    <ul>
      <li>
        <NavLink exact to='/' activeClassName="active">Balance</NavLink>
      </li>
      <li>
        <NavLink to='/gastos' activeClassName="active">Gastos</NavLink>
      </li>
      <li>
        <NavLink to='/ingresos' activeClassName="active">Ingresos</NavLink>
      </li>
      <li>
        <NavLink to="#about">About</NavLink>
      </li>
    </ul>
  </div>

export default SideBar