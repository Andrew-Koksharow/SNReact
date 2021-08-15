import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Preloader from './components/Common/Preloader';
import DialogContainer from './components/Dialogs/DialogContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/Users_container';
import {initialApp} from './redux/app-reducer'



class App extends React.Component {

componentDidMount() {
  this.props.initialApp()
}

  render() {
    if (!this.props.initialized) {return <Preloader/>}
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
          <Route path='/login' render={ ()=> <Login/>} />
        </div>
      </div>
    </BrowserRouter>
  );

}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initialApp})(App);
