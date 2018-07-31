import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainLayout from '../Component/MainLayout/MainLayout'
import BalanceSheet from '../Component/Money/BalanceSheet/BalanceSheet'
import GastosPage from '../screens/Gastos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact={true} path='/' render={() => (<MainLayout title="balance" ><BalanceSheet /></MainLayout>)} />
              <Route exact={true} path='/gastos'   render={ GastosPage } />
              <Route exact={true} path='/ingresos' render={() => (<MainLayout title="ingresos" ></MainLayout>)} />
            </Switch>
        </Router>
      </div>);
  }
}

export default App;
