import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import HTTP404Page from "./pages/404";

import Lab1Page from "./pages/lab1";
import Lab2Page from "./pages/lab2";
import Lab3Page from "./pages/lab3";
import Lab4Page from "./pages/lab4";
import Lab5Page from "./pages/lab5";

import AppNavbar from "./components/app-navbar";
import AppFooter from "./components/app-footer";
import "./App.scss";

const App = () => {
  return (
    <>
      <AppNavbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/lab1">
          <Lab1Page />
        </Route>
        <Redirect from="/labs/lab1/" to="/lab1" />
        <Route path="/lab2">
          <Lab2Page />
        </Route>
        <Redirect exact from="/lab3" to="/lab3/preferences" />
        <Route path="/lab3">
          <Lab3Page />
        </Route>
        <Route path="/lab4">
          <Lab4Page />
        </Route>
        <Route path="/lab5">
          <Lab5Page />
        </Route>
        <Route path="/404">
          <HTTP404Page />
        </Route>
        <Redirect from="*" to="/404" />
      </Switch>
      <AppFooter />
    </>
  );
};

export default App;
