import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home';
import Duroyal from './components/pages/Duroyal';
import Imei from './components/pages/Imei';
import Shaomei from './components/pages/Shaomei';


import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        {/* 每當一開始就會進入主頁Ｈome */}
        <Route path='/' exact component={Home} />
        <Route path='/duroyal' exact component={Duroyal} />
        <Route path='/imei' exact component={Imei} />
        <Route path='/shaomei' exact component={Shaomei} />
      </Switch>
    </Router>
    // </div>
  );
}

export default App;
