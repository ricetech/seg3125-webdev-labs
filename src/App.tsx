import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import HTTP404Page from "./pages/404";
import Lab1Page from './pages/lab1';

import AppNavbar from "./components/app-navbar";
import AppFooter from "./components/app-footer";

import './App.scss';

const App = () => {
  return (
    <>
      <AppNavbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path={[ '/lab1', '/labs/lab1' ]}>
          <Lab1Page />
        </Route>
        <Route path='/404'>
          <HTTP404Page />
        </Route>
        <Redirect from='*' to='/404' />
      </Switch>
      <AppFooter />
    </>
  );
}

export default App;
