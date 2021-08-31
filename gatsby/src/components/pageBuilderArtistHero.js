import React from 'react'
import Image from 'gatsby-image'
import PortableText from './portableText'

const PageBuilderArtistHero = ({ block, raw, index }) => {
  const { image, title, bkgImage } = block;

  return (
    <section id="pageBuilderArtistHero" className="relative w-screen h-60 md:h-m-80 mb-10 md:mb-28 overflow-hidden">
      <div id="imageContainer" className="z-20 w-full h-full flex justify-items-center items-center">
          <div className="z-20 relative w-2/4 h-3/5 h-min mx-auto overflow-hidden border-black border-2">
            {image ? (
              <Image fluid={image.asset.fluid} alt={image.alt} className="object-contain w-full h-full" />
            ) : null}
            <div className="absolute bottom-0 left-0 z-30 p-4 bg-white border-black border-t-2 border-r-2">
              <span className="text-cfs text-black font-semibold">{title}</span>
            </div>
          </div>
      </div>
      <div className="absolute w-screen top-0 left-0">
        {/* <div className="absolute w-screen h-full md:h-screen top-0 left-0 bg-black z-10 bg-opacity-10"></div> */}
        <Image fluid={bkgImage.asset.fluid} alt={bkgImage.alt} className="object-contain h-full md:h-screen overflow-hidden bg-opacity-50" />
      </div>
    </section>
  );
};

export default PageBuilderArtistHero;