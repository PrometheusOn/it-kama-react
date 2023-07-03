import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { state, addPost, updatePostText, addMessage, updateMessageText, subscribe } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = ( state ) => {
  root.render(
    <React.StrictMode>
      <App state={ state } addPost={ addPost } updatePostText={ updatePostText } addMessage={ addMessage } updateMessageText={ updateMessageText } />
    </React.StrictMode>
  );
}

renderEntireTree( state )

subscribe( renderEntireTree )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
