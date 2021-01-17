import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App5 from './chap1/App5_Array';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( //브라우저에 있는 실제 DOM 내부에 리액크 컴포넌트를 렌더링하겠다는 것
  <React.StrictMode>
    <App5 />
  </React.StrictMode>,
  document.getElementById('root') //리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부에 렌더링되는 것
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
