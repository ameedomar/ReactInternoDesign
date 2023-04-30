import { React } from "react";

import logo from "../imgs/Logo.png";
import icons from "../imgs/Icons.png";
import "./comp7.css";
function Component7() {
  return (
    <div className="parent7">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="rowForLogo">
              <img src={logo} className="logo" />
              <h5 className="intro">Intrerno</h5>
            </div>

            <p className="pForFirstLine">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>

            <img src={icons} className="icons" />
            <p></p>
          </div>
          <div className="col-md-3">
            <h5 className="lineTitle">Pages</h5>
            <p>About US</p>
            <p>Our Projects</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Services</p>
            <p></p>
          </div>
          <div className="col-md-3">
            <h5 className="lineTitle">Services</h5>
            <p>Kitchan</p>
            <p>Living Area</p>
            <p>Bathroom</p>
            <p>Dinnig Hall</p>
            <p>Bedroom</p>
            <p></p>
          </div>
          <div className="col-md-3">
            <h5 className="lineTitle">Contact</h5>
            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p>contact@interno.com</p>
            <p> (123) 456 - 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component7;
