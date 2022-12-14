import React from "react";
import ProgressBar from "progress";

import "../styles/scroll.css";

const progress = () => {
  ProgressBar = require("progress");
  let bar = new ProgressBar(":bar", { total: 5 });
  let timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
      console.log("\ncomplete\n");
      clearInterval(timer);
    }
  }, 100);
};

const Scroll = () => {
  return (
    <div className="scroll">
      <span id="scrollbar1"></span>
      <span id="scrollbar2" onScroll={progress}></span>
    </div>
  );
};

export default Scroll;
