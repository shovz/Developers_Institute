import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Components/Counter';

import {createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';

import reportWebVitals from './reportWebVitals';
const store = createStore(reducer ,applyMiddleware(thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Counter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
