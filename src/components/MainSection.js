import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./MainSection.css";

function MainSection({
  lightbg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightbg ? "home__main-section" : "home__main-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__main-row"
            style={{
              display: "flex",
              flexDirection: imgStart == "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__main-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__main-subtitle"
                      : "home__main-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/OS_FE/college">
                  <Button buttonSize="btn--wide">{buttonLabel}</Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__main-img-wrapper">
                <img src={img} className="home__main-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
