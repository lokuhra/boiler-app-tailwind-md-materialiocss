import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import * as routes from "../constants/routes";

import Navigation from "../Navigation";
import Home from "../Home";
import Page2 from "../Page_2";


class Index extends Component {
  render() {
    return (
      <Router>
        <Fragment>
        <Navigation/>
        <Route exac path={routes.HOME} component={() => <Home />} />
        <Route exac path={routes.PAGE_2} component={() => <Page2 />} />
        </Fragment>

      </Router>
    );
  }
}

export default Index;
