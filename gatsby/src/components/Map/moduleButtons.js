import React from "react"
import soloFlatIcon from '../../images/soloFlatIcon.png'
import duetFlatIcon from '../../images/duetFlatIcon.png'
import ensembleFlatIcon from '../../images/ensembleFlatIcon.png'
import orchestraFlatIcon from '../../images/orchestraFlatIcon.png'
import communityFlatIcon from '../../images/communityFlatIcon.png'

function ModuleButton({ filter }) {
  return (
    <ul className="flex flex-row flex-wrap justify-between space-y-2">
      <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
        <button id="allButton" onClick={() => filter('all')}>
          <p className="font-acuminPro uppercase text-cfsSM1">All</p>
        </button>
      </li>
      <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
        <button id="soloButton" onClick={() => filter('solo')}>
          <img src={soloFlatIcon} className="w-4 h-auto" alt="solo" />
          <p className="font-acuminPro uppercase text-cfsSM1">Solo</p>
        </button>
      </li>
      <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
        <button id="duetButton" onClick={() => filter('duet')}>
          <img src={duetFlatIcon} className="w-4 h-auto" alt="duet" />
          <p className="font-acuminPro uppercase text-cfsSM1">Duet</p>
        </button>
      </li>
      <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
        <button id="ensembleButton" onClick={() => filter('ensemble')}>
          <img src={ensembleFlatIcon} className="w-4 h-auto" alt="ensemble" />
          <p className="font-acuminPro uppercase text-cfsSM1">Ensemble</p>
        </button>
      </li>
      <li className="flex flex-row items-center space-x-2 w-1/2 lg:w-1/3">
        <button id="orchestraButton" onClick={() => filter('orchestra')}>
          <img src={orchestraFlatIcon} className="w-4 h-auto" alt="orchestra" />
          <p className="font-acuminPro uppercase text-cfsSM1">Orchestra</p>
        </button>
      </li>
      <li className="flex flex-row items-center space-x-2">
        <button id="communityButton" onClick={() => filter('community')}>
          <img src={communityFlatIcon} className="w-4 h-auto" alt="community" />
          <p className="font-acuminPro uppercase text-cfsSM1">Artist Neighborhoods</p>
        </button>
      </li>
    </ul>
  )
}

export default ModuleButton