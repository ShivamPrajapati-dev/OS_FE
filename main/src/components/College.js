import React from "react";
import { Button } from "./Button";
import "./College.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function College() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="college__section">
        <div className="college__wrapper">
          <h1 className="college__heading">Find Colleges</h1>
          <div className="college__container">
            <Link to="/collegebystate" className="college__container-card">
              <div className="college__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>By</h3>
                <h4>State</h4>
                <p>Find colleges by state</p>
              </div>
            </Link>
            <Link to="/collegebycourse" className="college__container-card">
              <div className="college__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>By</h3>
                <h4>Courses</h4>
                <p>Find colleges by Courses</p>
              </div>
            </Link>
            <Link to="/college" className="college__container-card">
              <div className="college__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Get</h3>
                <h4>All</h4>
                <p>Get all the colleges</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default College;
