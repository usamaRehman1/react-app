import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExpenceTrackerReducer  from "./container/expenceTrackerReducer/home";
import ExpenceTrackerContext from "./container/expenceTrackerContex/home";
import ExpenceTrackerReduxContex from "./container/expenceTrankerReduxContex/home";
import reportWebVitals from './reportWebVitals';
import  { BrowserRouter as Router  , Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/reducerTracker' component={ExpenceTrackerReducer}/>
      <Route exact path='/contextTracker' component={ExpenceTrackerContext}/>
      <Route exact path='/reduxContextTracker' component={ExpenceTrackerReduxContex}/>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
