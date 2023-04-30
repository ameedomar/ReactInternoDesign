import React from "react";
import "./comp0.css";
import logo from "../imgs/Logo.png";

function Component0() {
  return (
    <div className="mainContainer">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="rowForLogo">
          <img src={logo} className="logo" />
          <span class="navbar-brand" className="intro" href="#">
            {" "}
            Interno
          </span>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expand
          ed="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center "
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link =" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Project
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Blog
              </a>
            </li>
            <li class="form-inline my-2 my-lg-0">
              <a class="nav-link " href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Component0;