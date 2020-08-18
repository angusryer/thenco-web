import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Landing, Detail, About } from "./pages";
import { Nav, Footer } from "./components";
import './common/styles/base.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route>
          <Landing />
        </Route>
        <Route>
          <Detail />
        </Route>
        <Route>
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}