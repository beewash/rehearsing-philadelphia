import React from 'react'

function MapFilter() {
return (
  <div className="z-20 absolute top-4 right-4 opacity-1 bg-white border-2 border-black p-4">
    <div>
      <div>
        <p>Filter</p>
      </div>
    </div>
    <div>
      <ul>
        <li>
          <button>All</button>
          <button>Solo</button>
          <button>Orchestra</button>
        </li>
      </ul>
    </div>
  </div>
)
}

export default MapFilter