import "./App.css";
import React from "react";

import { Navbar, Hero } from "./components/index";
function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "4rem" }}></div>
      <Hero />
    </>
  );
}

export default App;
