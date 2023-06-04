import { React } from "react";
import mainImage from "../imgs/mainImg.jpg";
import arrow from "../imgs/Vector.png";
import "./comp1.css";
function Component1() {
  return (
    <div className="welcomingParent">
      <div className="WecomingImg">
        <div className="parentImg">
          <div className="row d-flex justify-content-center px-2">
            <div className="col-md-8 align-self-center px-5">
              <div className="contentImg">
                {/* <h5 className="summerText">SUMMER 2020</h5> */}
                <h1 className="titleImg">Let Your Home Be Unique</h1>
                <h3 className="descriptionImg">
                  There are many variations of the passages of lorem Ipsum
                  fromavailable,variations of the passages.
                </h3>
                <button type="button" className="getStartedBtn">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component1;
