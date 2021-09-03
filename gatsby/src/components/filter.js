import React from 'react'

const Filters = ({ rosterItem, handleSelect }) => {
  return (
    <div className='filter-wrapper'>

      <select className='filter-select' value={rosterItem} onChange={handleSelect}>
        <option value=''>Search by Region</option>
        <option value="solo-yellow">Solo</option>
        <option value="duet-red">Duet</option>
        <option value="ensemble-blue">Ensemble</option>
        <option value="orchestra-green">Orchestra</option>
      </select>
    </div>
  );
};
export default Filters