import React from 'react'
import {Link} from 'gatsby'

const GridBuilderTileBasic = ({block, raw, globalStyles}) => {
  const {tileColor, tileItem, colLayoutSection, rowLayoutSection} = block

  return (
    <section
      id="basicTile"
      className={`bg-${tileColor} ${globalStyles} ${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg}`}
    >
      <div id="basicTileContainer" className={`h-full flex flex-col justify-between space-y-8`}>
        {tileItem.map((item, index) => (
          <div key={index} id="basicTileItem" className={`w-full font-acuminPro uppercase font-light text-${item.textColor} hover:text-${item.hoverColor} even:text-right`}>
            <Link to={`/${item.slug.current}`}>
              <p className="text-cfs md:text-cfsL">{item.personName}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GridBuilderTileBasic