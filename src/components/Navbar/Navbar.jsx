import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}>My profile</NavLink></div>
      <div className={s.item}><NavLink to='/message' activeClassName={s.activeLink}>Messages</NavLink></div>
      <div className={s.item}><NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>
      <div className={s.item}><NavLink to='setting' activeClassName={s.activeLink}>Setting</NavLink></div>
    </nav>
  )
}

export default Navbar;