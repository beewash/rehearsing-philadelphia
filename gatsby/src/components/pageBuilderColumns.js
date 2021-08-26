import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {image, columns} = block

  return (
    <section className='max-w-6xl mx-auto px-2.5 pb-28'>
      <div className='container mx-auto flex flex-col py-4'>
        {columns && columns.map((column, index) =>
            <div className='flex flex-row last:rotate-45 even:flex-row-reverse items-center mb-56'>
              <div id="textContainer" className='w-1/2'>
                <PortableText className="text-black" blocks={raw.columns[index].body} />
                {/* <div id="performanceList" className="mt-8">
                  <p className="text-small">List of Performances</p>
                </div> */}
              </div>
              <div id="imageContainer" className="w-1/2 h-full">
                <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
              </div>
            </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderColumns