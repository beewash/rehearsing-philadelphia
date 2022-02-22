import React from 'react'
import PortableText from './portableText'
import BackgroundImage from 'gatsby-background-image'

const PageBuilderHero = ({ block, raw }) => {
  const { image, title, layout } = block;

  return (
    <>
    {layout == 'condensed' ? (
      <section id="condensedHero" className='w-screen h-36 md:h-60 mb-10 md:mb-28'>
        <BackgroundImage
          Tag="section"
          id="tileLocation"
          className={`relative flex w-full h-full`}
          fluid={image.asset.fluid}
          backgroundColor={`bg-transparent`}
          grayscale={true}
          title={title}
          role="img"
          aria-label="Fullscreen Background"
          preserveStackingContext={true}
        >
          <div className="w-full absolute translate-y-1/2 bottom-0 md:p-4">
            <div className='w-full max-w-6xl mx-auto px-6'>
              <div className="w-fit bg-white md:px-12 px-6 py-4">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </section>
    ) 
    : (
      <section id="fullHero" className="relative w-screen h-full md:h-screen mb-10 md:mb-28 overflow-hidden">
        <BackgroundImage
          Tag="section"
          id="tileLocation"
          className={`relative flex w-full h-full  text-white`}
          fluid={image.asset.fluid}
          backgroundColor={`bg-transparent`}
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
    )}
    </>
  )
}

export default PageBuilderHero