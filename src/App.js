import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializedApp} from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))
const Music = React.lazy(() => import('./components/Music/Music'))
const News = React.lazy(() => import('./components/News/News'))
const Login = React.lazy(() => import('./components/Login/Login'))




class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
}
  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path='/users/' element={<UsersContainer />} />
            <Route path='/news/' element={<News />} />
            <Route path='/music/' element={<Music />} />
            <Route path='/settings/' element={<Settings />} />
          </Routes>
          </React.Suspense>
        </div>
        {/* <Footer /> */}
      </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializedApp})(App);
