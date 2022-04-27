import React from 'react';
import Button from '../Common/Button';
import s from './Setting.module.css';


const darkTheme = () => {
    
    return {'background-color': 'black'}
}


const Setting = (props) => {
    return (
        <div>
<Button name={'setTheme'} onClick={()=>{darkTheme()}}/>
        </div>
    )
}

export default Setting;