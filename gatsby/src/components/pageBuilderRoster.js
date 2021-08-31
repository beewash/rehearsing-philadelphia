import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderRoster = ({block, raw}) => {
  const {title, roster} = block

  console.log('roster: ', raw.roster[1])

  return (
    <section id="Roster" className='max-w-6xl mx-auto px-4 md:px-2.5 pb-28'>
      <div className='container mx-auto flex flex-col py-4'>
        <div className="mb-8">
          <h4 className="normal-case" >{title}</h4>
        </div>
        <div id="rosterList" className="grid gap-4 justify-between grid-cols-100 md:grid-cols-150">
        {roster && roster.map((rosterItem, index) =>
          <div id="rosterItem" className='relative hover-trigger w-full h-24.5 md:h-36.5 flex items-center justify-center bg-white border-black border-2 rounded-full hover:bg-black hover:text-white'>
              <div id="textContainer" className="">
                <a href={rosterItem.slug.current}>
                  <div className="w-4/5 mx-auto">
                    <p className="text-cfsSM2 md:text-cfsSM font-acuminPro font-medium text-center">{rosterItem.personName}</p>
                  </div>
                  <div id="popUp" className="hidden absolute w-full z-50 bg-white border-black border-2 rounded-3xl hover-target overflow-hidden flex-column">
                    <div className="w-full h-72 mb-4">
                      <Image fluid={rosterItem.headshot.asset.fluid} alt={rosterItem.headshot.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full">
                      <p className="text-small font-bold uppercase text-black">{rosterItem.personName}</p>
                    </div>
                    <div className="w-full h-full">
                      <PortableText blocks={raw.roster[index].raw} />
                    </div>
                  </div>
                </a>
              </div>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

export default PageBuilderRoster