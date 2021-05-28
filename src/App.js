import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialogs/Dialog';

import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
// import { addPost } from './redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <div className='Header'><Header /></div>
        <div className='nav'><Navbar /></div>
        <div className='app_wrapper_content'>
          <Route path='/profile' render={()=><Profile profile={props.state.profilePage} 
                                                      addPost={props.addPost}
                                                      createNewPostText={props.createNewPostText}/>} />
          <Route path='/message' render={()=><Dialog dialogs={props.state.dialogPage} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
  
}


export default App;
