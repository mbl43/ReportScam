import React from "react";
import Theme from "../../theme/Theme";
import { House, Plus, Search } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="navbar d-flex fluid-container fixed-top py-4 px-5 justify-content-around">
      <span className="fs-4 fw-bolder">ReportScam</span>
      <ul className="list-group list-unstyled d-flex flex-row gap-3 justify-content-center align-items-center">
        <li
          className="d-flex gap-2 align-items-center justify-content-center p-2 table-active"
          role="button"
        >
          <House size={18}/>
          <span>Home</span>
        </li>
        <li
          className="d-flex gap-2 align-items-center justify-content-center p-2"
          role="button"
        >
          <Search size={18}/>
          <span>Browse</span>
        </li>
      </ul>

      <div>
        <Theme />
        <button className="border-0 rounded-pill border-light px-2 py-1 fw-normal ">
          Report Scam <Plus size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
