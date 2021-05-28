import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, createNewPostText} from './redux/state';


export let rerrenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} createNewPostText={createNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
