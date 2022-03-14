import React from "react"

function MarkerList({ data, onItemClick }) {
  return (
    <div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {data.map((item, index) => (
          <>
            <li
              key={index}
              onClick={() => {
                onItemClick(index);
              }}
              className="cursor-pointer"
            >
              {item.properties.moduleListName ? (
                <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.moduleListName}</div>
              ) : (
                <div className={`mb-2 uppercase font-acuminPro text-${item.properties.color}`}>{item.properties.module}</div>
              )}
              <p className="mb-1 text-base font-semibold">{item.properties.name}</p>
              {item.properties.address ? (
                <p className="text-xs">{item.properties.address}</p>
              ) : <p className="text-xs">{item.properties.site}</p>}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default MarkerList