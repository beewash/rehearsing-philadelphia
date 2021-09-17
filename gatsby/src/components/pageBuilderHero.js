import React from 'react'
import Image from 'gatsby-image'
import PortableText from './portableText'

const PageBuilderHero = ({ block, raw, index }) => {
  const { image, title } = block;

  return (
    <section id="pageBuilderHero" className="relative w-screen h-60 md:h-screen mb-10 md:mb-28 overflow-hidden">
      {image ? (
        <div className="relative z-20 text-center mt-16 md:mt-32">
          <h1 className="text-white mb-8 md:mb-20">{title}</h1>
          {raw.body ? (
            <div className="w-1/4 md:w-1/2 mx-auto">
              <PortableText blocks={raw.body} />
            </div>
          ) : null}
        </div>
      ) : null}
      {image ? (
      <div className="absolute w-screen top-0 left-0">
        <div className="absolute w-screen h-full md:h-screen top-0 left-0 bg-black z-10 bg-opacity-20"></div>
        <Image fluid={image.asset.fluid} alt={image.alt} className="object-cover h-full md:h-screen overflow-hidden" />
      </div>
      ) : null}
    </section>
  );
};

export default PageBuilderHero;