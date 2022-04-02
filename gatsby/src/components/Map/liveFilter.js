import React from "react";

function LiveFilter({ filter }) {
  return (
    <div id="liveFilter" className="">
      <button className="" onClick={() => filter()}>Live Today</button>
    </div>
  )
}

export default LiveFilter