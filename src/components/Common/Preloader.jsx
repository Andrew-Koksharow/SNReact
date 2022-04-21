import React from 'react';
import loader from '../../assets/loader.svg';
import sett from './Preloader.module.css'


const Preloader = () => {
    return <div className={sett.im}><img src={loader}/></div>
    }

    export default Preloader;