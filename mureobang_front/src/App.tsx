import React from 'react';
import './App.css';
import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PagesURL from "./PagesURL";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {ScrollToTop} from "@components/ScrollTop/ScrollTop";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif"
  }
})

function App() {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop/>
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
      </ThemeProvider>
    </>
  );
}

export default App;
