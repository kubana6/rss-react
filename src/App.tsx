import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

import "./App.scss";

const App = () => (
  <>
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <footer></footer>
  </>
);

export default App;
