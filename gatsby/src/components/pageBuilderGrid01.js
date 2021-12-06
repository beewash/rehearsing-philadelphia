import React from 'react'
import GridBuilder from './gridBuilder'

const PageBuilderGrid = ({block}) => {
  const {gridCol, gridRow, gridItems, _rawGridItems} = block

  return (
    <section id="boxes" className='w-full h-full'>
      <div className=''>
        <div className={`grid ${gridCol.colsSm} gap-4 px-4 md:${gridCol.colsMd} lg:${gridCol.colsLg} lg:${gridRow.rowLg}`}>
          <GridBuilder 
            gridItems={gridItems}
            _rawGridItems={_rawGridItems}
            globalStyles={`p-4`}
          />
        </div>
      </div>
    </section>
  )
}

export default PageBuilderGrid