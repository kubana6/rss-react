import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
