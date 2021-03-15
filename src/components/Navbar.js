import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { ImBooks } from "react-icons/im";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
              <ImBooks className="navbar-icon" />
              StudyHard
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/college" className="nav-links">
                  College
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
