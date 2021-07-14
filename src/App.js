import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogContainer from './components/Dialogs/DialogContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/Users_container';


function App(props) {
  
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <div className='Header'><HeaderContainer /></div>
        <div className='nav'><Navbar /></div>
        <div className='app_wrapper_content'>
          <Route path='/profile/:UserId?' render={() => <ProfileContainer />} />
          <Route path='/message' render={() => <DialogContainer />} />
          <Route path='/users' render={ ()=> <UsersContainer/>} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;
