import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const GridBuilderTileLocation = ({block}) => {
const {title, tileColor, image, colLayoutSection, rowLayoutSection} = block

  return (
    <div
      id="tileLocation"
      className={`bg-${tileColor} ${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg} hover:bg-${tileColor} rounded-lg`}
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
          <p className="text-cfs md:text-cfsL font-acuminPro uppercase font-light">{title}</p>
        </div>
      </div>
      <div className={`absolute top-0 left-0 w-full h-full bg-${tileColor} bg-opacity-70`}></div>
    </BackgroundImage>
    </div>
  )
}

export default GridBuilderTileLocation