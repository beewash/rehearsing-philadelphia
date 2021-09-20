import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'
import { Spring, animated } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"
import Slider from 'react-slick'

const PageBuilderColumns = ({block, raw}) => {
  const {columns} = block

  const settings = {
    dots: false,
    adaptiveHeight: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    
    <section id="columns" className='w-full h-full px-4 pb-4'>
      <Slider {...settings}>
        {columns && columns.map((column, index) => (
        <div>
          <div id="column" className={`bg-${column.bgColor} text-${column.textColor} w-full h-full px-8 md:px-32 py-16 mx-auto flex flex-col lg:flex-row lg:odd:flex-row-reverse items-center`}>
            {column.image ? (
            <div id="imageContainer" className="w-full h-full mb-8 lg:mb-0">
                <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
            </div>
            ) : null}
            <div id="textContainer" className="w-full">
              <PortableText blocks={raw.columns[index].body} />
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </section>

    // <section id="columns" className='w-full h-full px-4 pb-4'>
    //   <div className='w-full space-y-4'>
    //     {columns && columns.map((column, index) =>
    //     <VisibilitySensor partialVisibility offset={{top:100, bottom:200}}>
    //     {({ isVisible }) => (
    //       <Spring delay={300} to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0px)" : "translateY(-100px)" }}>
    //         {styles => (
    //           <animated.div 
    //             // style={styles} 
    //             id="column" 
    //             className={`magic`}
    //             data-sal="slide-up"
    //             data-sal-easing="ease"
    //           >
    //             <div className={`bg-${column.bgColor} w-full h-full px-32 py-16 mx-auto flex flex-col lg:flex-row lg:odd:flex-row-reverse lg:last:flex-col items-center`}>
    //               <div id="imageContainer" className="w-full h-full mb-8 lg:mb-0">
    //                 <Image fluid={column.image.asset.fluid} alt={column.image.alt} className="w-8/12 object-cover mx-auto justify-items-center items-center" />
    //               </div>
    //               <div id="textContainer" className="w-full">
    //                 <PortableText className="text-black" blocks={raw.columns[index].body} />
    //               </div>
    //             </div>
    //           </animated.div>
    //         )}
    //         </Spring>
    //       )}
    //     </VisibilitySensor>
    //     )}
    //   </div>
    // </section>
  )
}

export default PageBuilderColumns