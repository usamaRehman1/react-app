import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="root">
      <h1>EXPENCE TRACKER</h1>
      <Link to="/reducerTracker" className="reducerBtn">Expence Tracker With Reducer</Link>
      <Link to="/contextTracker" className="reducerBtn">Expence Tracker With Context</Link>
      <Link to="/reduxContextTracker" className="reducerBtn">Expence Tracker With ReduxCotext</Link>
    </div>
  );
}

export default App;
