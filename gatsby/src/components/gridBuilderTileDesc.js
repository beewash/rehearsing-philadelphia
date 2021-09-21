import React from 'react'
import PortableText from './portableText'

const GridBuilderTileDesc = ({block, raw, globalStyles}) => {
const {textBlocks, tileColor, textColor, colLayoutSection, rowLayoutSection} = block

  return (
    <section 
      id="tileDesc"
      className={`border-${tileColor} border-2 ${globalStyles} ${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg}`}
    >
      <div className={`h-full flex flex-col justify-between space-y-8 text-${textColor}`}>
        {textBlocks.map(text => (
          <div className="last:mt-8">
            <PortableText blocks={text._rawBody} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GridBuilderTileDesc