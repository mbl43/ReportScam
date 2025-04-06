import React from "react";
import Theme from "../../theme/Theme";
import {  House, Plus, Search } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-3 py-2 shadow-sm" style={{backgroundColor:'var(--background)'}}>
    <div className="container-fluid d-flex justify-content-between align-items-center">
      {/* Brand */}
      <span
        className="navbar-brand fs-4 fw-bold"
        style={{ color: "var(--text)" }}
      >
        ReportScam
      </span>
      
      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"
        style={{

          filter: "var(--icon-filter, none)"
        }}
        ></span>
      </button>
      
      {/* Collapsible Content */}
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navContent"
      >
        {/* Nav Links */}
        <ul className="navbar-nav mx-auto gap-lg-4 d-flex flex-column flex-lg-row align-items-center">
          <li className="nav-item">
            
            <a  href="/"
              className="nav-link d-flex gap-2 align-items-center"
              style={{ color: "var(--text)" }}
            >
              <House size={18} /> Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#browse"
              className="nav-link d-flex gap-2 align-items-center"
              style={{ color: "var(--text)" }}
            >
              <Search size={18} /> Browse
            </a>
          </li>
        </ul>
        
       
        <div className="d-flex gap-sm-3 align-items-center justify-content-center mt-sm-3 mt-lg-0 flex-sm-row flex-column">
          <Theme />
          <button className="rounded-pill d-flex align-items-center gap-1 px-3 py-1">
            Report Scam <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
