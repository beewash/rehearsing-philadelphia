import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {image, columns} = block

  return (
    <section className='max-w-6xl mx-auto px-2.5 pb-28'>
      <div className='container mx-auto flex flex-col py-4'>
        {columns && columns.map((column, index) =>
            <div className='flex flex-row even:flex-row-reverse bg-white border border-teal-200 rounded p-4 mb-20'>
              <div id="textContainer" className='flex-1'>
                <PortableText className="text-black" blocks={raw.columns[index].body} />
                <div id="performanceList" className="mt-8">
                  <p className="text-small">List of Performances</p>
                </div>
              </div>
              <div id="imageContainer" className="w-1/2 h-96 pl-16">
                <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-full h-full object-cover" />
              </div>
            </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderColumns