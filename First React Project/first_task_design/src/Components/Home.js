import React from "react";
import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";
import Component3 from "../Component3/Component3";
import Component4 from "../Component4/Component4";
import Component5 from "../Component5/Component5";
import Component6 from "../Component6/Component6";
import Component7 from "../Component7/Component7";

import "../css/home.css";

function Home() {
  return (
    <div className="home">
      <Component1 />
      <Component2 />
      <Component4 />
      <Component3 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}
export default Home;
