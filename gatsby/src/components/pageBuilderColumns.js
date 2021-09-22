import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {columns, colLayoutSection, rowLayoutSection} = block

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   adaptiveHeight: true,
  //   fade: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // }

  return (
    <section id="columns" className='w-full h-full px-4'>
      <div className='w-full space-y-4'>
        {columns && columns.map((column, index) => (
          <div 
            id="column" 
            className={`bg-${column.bgColor} text-${column.textColor} w-full h-full pt-8 pb-4 px-4 lg:py-16 lg:px-32 mx-auto flex flex-col lg:flex-row lg:odd:flex-row-reverse lg:last:flex-col items-center`}
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

    // <section id="columns" className={`${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg}`}>
    //   <Slider {...settings}>
    //     {columns && columns.map((column, index) => (
    //     <div className="h-full flex items-center">
    //       <div id="column" className={`bg-${column.bgColor} text-${column.textColor} w-full h-full px-8 md:px-32 py-16 mx-auto flex flex-col items-center`}>
    //         {column.image ? (
    //         <div id="imageContainer" className="w-full h-full mb-8">
    //             <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
    //         </div>
    //         ) : null}
    //         <div id="textContainer" className="w-full">
    //           <PortableText blocks={raw.columns[index].body} />
    //         </div>
    //       </div>
    //     </div>
    //     ))}
    //   </Slider>
    // </section>
  )
}

export default PageBuilderColumns