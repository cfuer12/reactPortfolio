import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Carlos Fuerte Gaspar
      </Link>
      <div>
        <Link to="/portfolio">
          <button
            type="button"
            id="portBtn"
            className="btn btn-lg text-light"
          >
            Portfolio
          </button>
        </Link>
        <Link to="/contact">
          <button type="button" id="portBtn" className="btn btn-lg text-light">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
