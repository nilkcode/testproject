import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
         
          <Link to="/" className="navbar-brand"> 
              Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarNav"
            style={{ justifyContent: "flex-end" }}
          >
            <ul className="navbar-nav">
          
              <li className="nav-item active">
                 <Link to="/" className="nav-link">
                    Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About 
                </Link>
              </li>
            
             
            </ul>
           
          </div>
        
        </div>
        <Link to="/users/adduser"  className="btn btn-primary" > Add User</Link>
      </nav>
  
    </div>
  );
};

export default Navbar;
