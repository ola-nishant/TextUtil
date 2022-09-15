// modules
import PropTypes from "prop-types";
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Navbar(props) {
  
// states 
  const [appMode, setappMode] = useState(props.appMode)

// constants 

// functions 
  const handleToggle = ()=>{
    (appMode==="light")?setappMode("dark"):setappMode("light");
    props.toggleMode();
  }
  
  return (
// jsx
    <>
      <nav className={`navbar navbar-expand-lg bg-${appMode} navbar-${appMode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handleToggle}
              />
              <label className={`form-check-label text-${(appMode==='light')?"dark":"light"}` }htmlFor="flexSwitchCheckDefault" >
                Enable {(appMode==="light")?"dark":"light"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// exports 
export default Navbar;

// props 
Navbar.defaultProps = { title: "Title here", about: "About us" };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
