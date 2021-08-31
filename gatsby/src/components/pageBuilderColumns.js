import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {image, columns} = block

  return (
    <section className='max-w-6xl mx-auto px-4 md:px-2.5 pb-28'>
      <div className='container mx-auto flex flex-col py-4 space-y-56'>
        {columns && columns.map((column, index) =>
            <div className='flex flex-col md:flex-row md:odd:flex-row-reverse md:last:flex-col items-center'>
              <div id="imageContainer" className="w-full h-full mb-8 md:mb-0">
                <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
              </div>
              <div id="textContainer" className="w-full">
                <PortableText className="text-black" blocks={raw.columns[index].body} />
                {/* <div id="performanceList" className="mt-8">
                  <p className="text-small">List of Performances</p>
                </div> */}
              </div>
            </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderColumns