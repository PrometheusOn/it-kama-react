import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = ( state ) => {
  root.render(
    <React.StrictMode>
      <App 
        state={ state }
        dispatch={ store.dispatch.bind(store) }
        store={ store }
        // addPost={ store.addPost.bind(store) }
        // updateNewPostText={ store.updateNewPostText.bind(store) }
        // addMessage={ store.addMessage.bind(store) }
        // updateNewMessageText={ store.updateNewMessageText.bind(store) }
      />
    </React.StrictMode>
  );
}

renderEntireTree( store.getState() )

store.subscribe( renderEntireTree )
// store.subscribe( () => {
//   const state = store.getState()
//   renderEntireTree(state)
// } )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
