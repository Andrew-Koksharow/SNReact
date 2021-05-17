
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// прокинуть до коммпонент через пропсы
let posts = [
  { id: 1, message: 'Hello, it my first post', likesCount: 12 },
  { id: 2, message: 'yo', likesCount: 5 },
  { id: 3, message: 'hhahhaa classic', likesCount: 10 },
  { id: 4, message: 'hey', likesCount: 10 },
  { id: 5, message: 'wwaawaw' },
  { id: 6, message: 'React is so cool' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
