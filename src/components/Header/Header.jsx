import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headIcon from '../../assets/headIcon.png'

const Header = (props) => {
    return (
    <header className={s.Header}>
    <img className={s.headIcon} src={headIcon}></img>
    
    <div className={s.loginBlock}>
{props.isAuth ? <div>{props.login} - <button onClick={props.logout}> logout </button> </div>  
: <NavLink to={'/login'} className={s.login}> login </NavLink>}
    </div>
  </header>)
}

export default Header;