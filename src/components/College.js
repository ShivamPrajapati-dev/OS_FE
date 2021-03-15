import React from "react";
import "./College.css";
import { MdPlace } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function College() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="college__section">
        <div className="college__wrapper">
          <h1 className="college__heading">Find Colleges</h1>
          <div className="college__container">
            <Link
              to="/OS_FE/collegebystate"
              className="college__container-card"
            >
              <div className="college__container-cardInfo">
                <div className="icon">
                  <MdPlace />
                </div>
                <h3>By</h3>
                <h4>State</h4>
                <p>Find colleges by state</p>
              </div>
            </Link>
            <Link
              to="/OS_FE/collegebycourse"
              className="college__container-card"
            >
              <div className="college__container-cardInfo">
                <div className="icon">
                  <IoBookSharp />
                </div>
                <h3>By</h3>
                <h4>Courses</h4>
                <p>Find colleges by Courses</p>
              </div>
            </Link>
            <Link
              to={{
                pathname: "/OS_FE/completecollege",
                state: { url: "getallcollege" },
              }}
              className="college__container-card"
            >
              <div className="college__container-cardInfo">
                <div className="icon">
                  <AiOutlineUnorderedList />
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
