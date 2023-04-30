import React from "react";
import p from "../imgs/Photo.png";
import p1 from "../imgs/Photo1.png";
import p2 from "../imgs/Photo2.png";
import p3 from "../imgs/Photo3.png";
import goToNext from "../imgs/goToNext.png";
import "./comp3.css";

const data = [
  {
    img: p,
    class: "c1",
    title: "Modern Kitchan",
    description: "Decor / Artchitecture",
  },
  {
    img: p1,
    class: "c2",
    title: "Modern Kitchan",
    description: "Decor / Artchitecture",
  },
  {
    img: p2,
    class: "c3",
    title: "Modern Kitchan",
    description: "Decor / Artchitecture",
  },
  {
    img: p3,
    class: "c4",
    title: "Modern Kitchan",
    description: "Decor / Artchitecture",
  },
];

function Component3() {
  return (
    <div className="parent3">
      <div className="addPart">
        <h3 className="titleComp3">Follow Our Projects</h3>

        <p className="descriptionComp3">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="outerShowPart">
        <div className="rowComp3">
          <div class="container">
            <div class="row">
              {data.map((item) => (
                <div class="col-md-5">
                  <div className="photos">
                    <img
                      className={item.class}
                      src={item.img}
                      alt="Kitchan img"
                    />

                    <div className="footerTextArrow">
                      <div className="texts">
                        <h6 className="modernKitchan">{item.title}</h6>
                        <p className="decor">{item.description} </p>
                      </div>
                      <div className="goToNext">
                        <img
                          src={goToNext}
                          alt={goToNext}
                          className="goToNext"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component3;
