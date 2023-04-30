import React from "react";
import "./comp5.css";
import line from "../imgs/Line.png";

function Component5() {
  const infoToDisplay = [
    { num: 12, category: "Years Of Experiance" },
    { num: 85, category: "Success Project" },
    { num: 15, category: "Active Project" },
    { num: 95, category: "Happy CUstomers" },
  ];
  return (
    <div className="parentforComp5">
      <div className="container">
        <div className="row">
          {infoToDisplay.map((item) => (
            <div className="col-md-3">
              <h2>{item.num}</h2>
              <p className="des">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Component5;
