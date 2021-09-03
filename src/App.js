import React from 'react';
import Leads from './container/Leads';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './container/NavBar';

const App = () => {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div>
          <Leads />
        </div>
      </div>
    </div>
  );
};

export default App;
