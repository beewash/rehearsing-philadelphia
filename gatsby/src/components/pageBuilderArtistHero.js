import React from 'react'
// import SanityImage from 'gatsby-plugin-sanity-image';
import Image from 'gatsby-image'

const PageBuilderArtistHero = ({ block, raw, index, }) => {
  const { image, title, bkgImage } = block;

  return (
    <section id="pageBuilderArtistHero" className="relative w-screen h-full md:h-m-80 mb-10 md:mb-28 overflow-hidden">
      <div id="imageContainer" className="z-20 w-full h-full flex-col md:flex justify-items-center items-center">
          <div className="p-8 pb-0 md:hidden">
            <div className="z-20 relative w-max mx-auto p-2 md:p-4 bg-white border-black border-2 border-r-2 rounded-full">
              <span className="text-cfsSM text-black font-semibold">{title}</span>
            </div>
          </div>
          <div className="p-8 md:p-0 w-full h-full flex justify-items-center items-center">
            <div className="z-20 relative w-full md:w-4/5 lg:w-2/5 h-3/5 h-min mx-auto border-black border-2">
              {image ? (
                // <SanityImage {...image} width={500} />
                <Image fluid={image.asset.fluid} alt={image.alt} className="object-contain w-full h-full" />
              ) : null}
              <div className="hidden md:block absolute -bottom-5 md:-bottom-10 -left-10 z-30 p-2 md:p-4 bg-white border-black border-2 border-r-2 rounded-full">
                <span className="text-cfsSM1 md:text-cfs text-black font-semibold">{title}</span>
              </div>
            </div>
          </div>
      </div>
      <div className="z-10 absolute w-screen top-0 left-0">
        {/* <div className="absolute w-screen h-full md:h-screen top-0 left-0 bg-black z-10 bg-opacity-10"></div> */}
        <Image fluid={bkgImage.asset.fluid} alt={bkgImage.alt} className="object-contain h-full md:h-screen overflow-hidden" />
      </div>
    </section>
  );
};

export default PageBuilderArtistHero;