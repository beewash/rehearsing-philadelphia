import React from "react";

function LiveFilter({ filter }) {
  return (
    <div id="liveFilter" className="">
      <button className="" onClick={() => filter()}>Live Events</button>
    </div>
  )
}

export default LiveFilter