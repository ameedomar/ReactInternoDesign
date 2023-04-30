import React from "react";
import comp4Img from "../imgs/comp4Img.jpg";
import vector from "../imgs/Vector.png";
import call from "../imgs/Call Icon.png";
import "./comp4.css";

function Component4() {
  return (
    <div className="parent4">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3 className="title4">
              We Create The Art Of Stylish Living Stylishly
            </h3>
            <p className="description4">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="callSection">
              <div>
                {" "}
                <img src={call} className="callVector" />
              </div>
              <div className="phonetext">
                <p className="phoneNumber">012345678</p>
                <p className="callUs">Call Us Anytime</p>
              </div>
            </div>

            <button className="btn">
              Get Free Estimate
              <img src={vector} />
            </button>
          </div>

          <div className="col-md-5">
            <img src={comp4Img} className="comp4Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component4;
