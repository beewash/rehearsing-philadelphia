import React from 'react'
// import SanityImage from 'gatsby-plugin-sanity-image';
import Image from 'gatsby-image'

const PageBuilderArtistHero = ({ block, raw, index, }) => {
  const { image, title, bkgImage } = block;

  return (
    <section id="pageBuilderArtistHero" className="relative w-screen h-full md:h-m-80 mb-10 md:mb-28 overflow-hidden">
      <div id="imageContainer" className="z-20 w-full h-full flex flex-col-reverse p-8 lg:flex-row">
        <div className="z-20 lg:w-1/2 h-full flex justify-center items-center">
          <div className="w-1/2 md:w-4/5">
              {image ? (
                // <SanityImage {...image} width={500} />
                <Image fluid={image.asset.fluid} alt={image.alt} className="aspect-square border-2 border-black rounded-full" />
              ) : null}
          </div>
        </div>
        <div className="z-20 lg:w-1/2 lg:h-full flex justify-center items-center pb-8">
            <h1 className="w-fit mx-auto backdrop-blur-md bg-white/80 border-2 border-black px-4 py-2">{title}</h1>  
        </div>
      </div>
      <div className="z-10 absolute w-screen top-0 left-0">
        <Image fluid={bkgImage.asset.fluid} alt={bkgImage.alt} className="object-contain h-full md:h-screen overflow-hidden" />
      </div>
    </section>
  );
};

export default PageBuilderArtistHero;