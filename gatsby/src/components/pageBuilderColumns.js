import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {columns} = block

  return (
    <section id="columns" className='w-full h-full px-4'>
      <div className='w-full space-y-4'>
        {columns && columns.map((column, index) => (
          <div 
            key={index}
            id="column" 
            className={`bg-${column.bgColor} text-${column.textColor} w-full h-full p-8 mx-auto flex flex-col lg:flex-row lg:odd:flex-row-reverse lg:last:flex-col items-center rounded-lg`}
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"  
          >
            <div id="imageContainer" className="w-full h-full mb-8 lg:mb-0">
              <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
            </div>
            <div id="textContainer" className="w-full">
              <p className="mb-8 text-center lg:text-left text-4xl md:text-6xl">{column.title}</p>
              <PortableText className={`text-${column.textColor}`} blocks={raw.columns[index].body} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PageBuilderColumns