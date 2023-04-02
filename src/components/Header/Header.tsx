import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { routes, routesList } from "../../constants";
import "./Header.scss";

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;

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
};
