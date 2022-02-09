import React from 'react';
import './App.css';
import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PagesURL from "./PagesURL";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          {/*{PagesURL.map(route => (*/}
          {/*  route.private ? <PrivateRoute path={} component={}*/}
          {/*))}*/}
          {PagesURL.map(route => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
