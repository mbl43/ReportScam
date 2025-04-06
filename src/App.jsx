import "./App.css";
import React from "react";

import { Navbar, Hero, ReportList, Footer } from "./components/index";
function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "4rem" }}></div>
      <Hero />
      <ReportList/>
      <Footer/>
    </>
  );
}

export default App;
