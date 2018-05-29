import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import * as routes from "../constants/routes";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Redirect from="/" to={routes.HOME} />
        <ul>
          <li className="list-group-item">
            <Link to={routes.HOME}>Home</Link>
          </li>
          <li className="list-group-item">
            <Link to={routes.PAGE_2}>Pagina 2</Link>
          </li>
          <li className="list-group-item">
            <Link to={routes.PAGE_3}>Pagina 3</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Navigation;
