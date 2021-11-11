import React from 'react'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const GridBuilderTileArtist = ({block, raw, globalStyles}) => {
  const {tileColor, tileItem, colLayoutSection, rowLayoutSection} = block

  return (
    <div
      id="tileArtistSpotlight"
      className={`bg-${tileColor} ${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg} hover:bg-${tileColor}`}
    >
      {tileItem.map(item => (
      <Link to={`/${item.slug.current}`}>
        <BackgroundImage
          Tag="section"
          id="tileLocation"
          className={`relative z-20 flex p-4 w-full h-full  text-white items-end rounded-full`}
          fluid={item.headshot.asset.fluid}
          backgroundColor={`#fff`}
          grayscale={true}
          title={item.personName}
          role="img"
          aria-label="Fullscreen Background"
          preserveStackingContext={true}
        >
          <div className="z-10 relative mt-12">
            <div>
              <p className="text-cfs md:text-cfsL font-acuminPro uppercase font-light">{item.personName}</p>
            </div>
          </div>
          <div className={`absolute top-0 left-0 w-full h-full bg-${tileColor} bg-opacity-70`}></div>
        </BackgroundImage>
      </Link>
      ))}
    </div>
  )
}

export default GridBuilderTileArtist