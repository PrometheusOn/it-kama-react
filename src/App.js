// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Profile from './components/Profile/Profile.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx'
import News from './components/News/News.jsx'
import Music from './components/Music/Music.jsx'
import Settings from './components/Settings/Settings.jsx'
import { Routes, Route } from 'react-router-dom'
import NavContainer from './components/Nav/NavContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/dialogs/*' element={ <DialogsContainer /> }/>
          <Route path='/profile' element={ <Profile /> }/>
          <Route path='/news' element={ <News /> }/>
          <Route path='/music' element={ <Music /> }/>
          <Route path='/settings' element={ <Settings /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
