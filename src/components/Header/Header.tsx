import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter, WithRouterProps } from "../../hocs/withRouter";
import { routes, routesList } from "../../constants";
import "./Header.scss";

class HeaderUI extends Component<WithRouterProps> {
  render(): React.ReactNode {
    const {
      location: { pathname },
    } = this.props;
    return (
      <header className="header">
        <ul className="header-navigation-items">
          {routesList.map((route, index) => (
            <li key={`${route}${index}`} className="header-navigation-item">
              <NavLink className="header-navigation-item-link" to={String(route)} end>
                {routes[route]}
              </NavLink>
            </li>
          ))}
        </ul>

        <p>Current page: {routes[pathname] || "Not Found"}</p>
      </header>
    );
  }
}

export const Header = withRouter(HeaderUI);
