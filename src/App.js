// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import News from './components/News/News.jsx'
import Music from './components/Music/Music.jsx'
import Settings from './components/Settings/Settings.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = ( props ) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friendsList={ props.state.sidebar.friendsList } />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={ <Dialogs store={ props.store } /> }/>
            {/* addMessage={ props.addMessage } updateNewMessageText={ props.updateNewMessageText } */}
            <Route path='/profile' element={ <Profile store={ props.store } /> }/>
            {/* addPost={ props.addPost } updateNewPostText={ props.updateNewPostText }  */}
            <Route path='/news' element={ <News /> }/>
            <Route path='/music' element={ <Music /> }/>
            <Route path='/settings' element={ <Settings /> }/>
          </Routes>
        </div>
      </div>    
    </BrowserRouter>

  );
}

export default App;
