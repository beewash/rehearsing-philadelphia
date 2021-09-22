import React from 'react'
import PortableText from './portableText'
import BackgroundImage from 'gatsby-background-image'

const GridBuilderTileLocation = ({block, raw}) => {
const {title, tileColor, _rawBody, image, cta, colLayoutSection, rowLayoutSection} = block

  return (
    <div
      id="tileLocation"
      className={`bg-${tileColor} ${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg} hover:bg-${tileColor}`}
    >
    <BackgroundImage
      Tag="section"
      id="tileLocation"
      className={`relative z-20 flex p-4 w-full h-full  text-white items-end rounded-full`}
      fluid={image.asset.fluid}
      backgroundColor={`#fff`}
      grayscale={true}
      title={title}
      role="img"
      aria-label="Fullscreen Background"
      preserveStackingContext={true}
    >
      <div className="z-10 relative mt-12">
        <div>
          <p className="text-cfsL font-acuminPro uppercase font-light">{title}</p>
        </div>
        {/* <div id="locationInfo">
          <PortableText blocks={raw.body} />
        </div> */}
      </div>
      <div className={`absolute top-0 left-0 w-full h-full bg-${tileColor} bg-opacity-70`}></div>
    </BackgroundImage>
    </div>
  )
}

export default GridBuilderTileLocation