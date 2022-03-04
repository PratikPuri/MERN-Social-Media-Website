import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Profiles from './components/Profile/Profile';
import ProfileForm from './components/Profile/CreateProfile';
import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import HomePage from './components/Home';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () =>{
  useEffect(() => {
    store.dispatch(loadUser())}, []);
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar/>
            <Routes>
              <Route path='/' element = {<Landing/>} />
            </Routes>     
            <section className='container'>         
            <Alert/>
              <Routes>   
                <Route path='/register' element = {<Register/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/profiles' element = {<Profiles/>}/>
                <Route path='/createProfile' element = {<ProfileForm/>}/>
                <Route path='/home' element = {<HomePage/>}/>
              </Routes>      
            </section>      
          </Fragment>
        </Router>
      </Provider>
)}

export default App;