import React from 'react';
import  Header  from './components/Header';
import Balance from './components/Balance';
import incomeExpenses from './components/incomeExpenses';


import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Balance/>
        <incomeExpenses/>
      </div>
    </div>
  );
}

export default App;
