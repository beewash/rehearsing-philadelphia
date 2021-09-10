import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {columns} = block

  return (
    <section className='max-w-6xl mx-auto px-6 pb-28'>
      <div className='container mx-auto flex flex-col py-4 space-y-56'>
        {columns && columns.map((column, index) =>
            <div id="column" className='magic flex flex-col lg:flex-row lg:odd:flex-row-reverse lg:last:flex-col items-center'>
              <div id="imageContainer" className="w-full h-full mb-8 lg:mb-0">
                <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
              </div>
              <div id="textContainer" className="w-full">
                <PortableText className="text-black" blocks={raw.columns[index].body} />
              </div>
            </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderColumns