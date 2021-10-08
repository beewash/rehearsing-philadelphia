import React from 'react'
import PortableText from './portableText'
import BackgroundImage from 'gatsby-background-image'

const PageBuilderHero = ({ block, raw }) => {
  const { image, title } = block;

  return (
    <section id="pageBuilderHero" className="relative w-screen h-full md:h-screen mb-10 md:mb-28 overflow-hidden">
      <BackgroundImage
        Tag="section"
        id="tileLocation"
        className={`relative flex w-full h-full  text-white`}
        fluid={image.asset.fluid}
        backgroundColor={`#000`}
        grayscale={true}
        title={title}
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        <div className="relative z-30 text-center px-8 py-16 md:pt-32">
          <h1 className="text-white mb-8 md:mb-20">{title}</h1>
          {raw.body ? (
            <div className="w-2/5 md:w-1/2 mx-auto">
              <PortableText blocks={raw.body} />
            </div>
          ) : null}
        </div>
      </BackgroundImage>
    </section>
  )
}

export default PageBuilderHero