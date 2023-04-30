import React from "react";
import "./comp2.css";

import arrowVector from "../imgs/Vector.png";

function Component2() {
  const titles = ["project Plan", "Interior Work", "Realization"];
  const description =
    "There are many variations of the passages of lorem Ipsum from available, majority";
  return (
    <div className="container">
      <div className="row">
        {titles.map((item) => (
          <div className="col-md-4 col-sm py-3">
            <div className="sub-content">
              <h5 className="title2">{item}</h5>
              <p className="description2">{description}</p>
            </div>
            <div className="button2">
              <p className="readMoreBtn"> Read More </p>
              <img src={arrowVector} className="arrowVector" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Component2;

/*    <a type="submit" className="readMoreBtn">
                Get Started &nbsp;
                <img src={arrowVector} className="arrowVector" />
              </a>*/
