import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import Lab1Page from './pages/lab1';

import './App.scss';
import AppNavbar from "./components/app-navbar";

const App = () => {
  return (
    <>
      <AppNavbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/lab1'>
          <Lab1Page />
        </Route>
      </Switch>
    </>
  );
}

export default App;
