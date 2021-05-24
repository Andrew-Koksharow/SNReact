import React from 'react';
import s from './Ava.module.css'

const AvatarInfo = () => {
  return (
    <div className={s.description}>
      <div className={s.avatar}></div>
      <div className={s.item}>
        React learning 
        </div>

    </div>)
}

export default AvatarInfo;