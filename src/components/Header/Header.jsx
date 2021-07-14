import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
    <header className={s.Header}>
    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'></img>

    <div className={s.loginBlock}>
{props.isAuth ? props.login : <NavLink to={'/login'}> login </NavLink>}
    </div>
  </header>)
}

export default Header;