import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        
       <strong><NavLink className="navbar-brand" to="/">
          HRConnect
        </NavLink></strong> 

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink className="nav-link active" aria-current="page" to="/emp">
                Employee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employee">
                 Post Empoyee
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

