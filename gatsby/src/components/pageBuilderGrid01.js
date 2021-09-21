import React from 'react'
import GridBuilder from './gridBuilder'

const PageBuilderGrid = ({block}) => {
  const {gridItems, _rawGridItems} = block

  return (
    <section id="boxes" className='w-full h-full'>
      <div className=''>
        <div className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2">
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