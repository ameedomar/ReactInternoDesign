import { React } from "react";
import k1 from "../imgs/displatKitchan1.png";
import k2 from "../imgs/displatKitchan2.png";
import k3 from "../imgs/displatKitchan3.png";

import arrowBtn from "../imgs/arrowBtn.png";
import "./comp6.css";
function Component6() {
  const descriptionStatment =
    "It is a long established fact that a reader will be distracted bythe of readable content of a page when lookings at its layouts thepoints of using.";
  const dataToDisplay = [
    {
      photo: k1,
      title: "Let’s Get Solution For Building Construction Work",
      dates: "26 December,2022",
    },
    {
      photo: k2,
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      dates: "22 December,2022",
    },
    {
      photo: k3,
      title: "Best For Any Office & Business Interior Solution",
      dates: "25 December,2022",
    },
  ];

  return (
    <div className="main-parent6">
      <div className="parent6">
        <div className="row">
          <div className="col-md-7">
            <div className="topside">
              <h2 className="article">Articles & News</h2>
              <p className="description6">{descriptionStatment}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {dataToDisplay.map((item) => (
              <div className="col-sm-4">
                <div className="displaySideBox">
                  <img
                    src={item.photo}
                    alt="Kitchan photo"
                    className="kitchan"
                  />
                  <h3>{item.title}</h3>
                  <div className="lastline">
                    <p className="date">{item.dates}</p>
                    <img src={arrowBtn} alt="Arrow Button" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component6;
