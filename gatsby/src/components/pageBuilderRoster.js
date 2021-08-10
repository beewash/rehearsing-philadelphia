import React from 'react'
import Image from "gatsby-image"
import PortableText from './portableText'

const PageBuilderRoster = ({block, raw}) => {
  const {title, roster} = block

  return (
    <section id="Roster" className='max-w-6xl mx-auto px-2.5 pb-28'>
      <div className='container mx-auto flex flex-col py-4'>
        <h4>{title}</h4>
        <div id="rosterList" className="flex flex-row flex-wrap">
        {roster && roster.map((rosterItem, index) =>
          <div className='w-1/3 mb-1 p-4'>
              <div id="textContainer" className='relative hover-trigger flex-1 bg-white border-black border-2 rounded-3xl p-4 hover:bg-black hover:text-white'>
                <p className="text-small font-bold uppercase text-center">{rosterItem.personName}</p>
                <div id="popUp" className="absolute w-full z-50 bg-white border-black border-2 rounded-3xl hover-target overflow-hidden flex flex-column">
                  <div className="w-full h-72 mb-4">
                    <Image fluid={rosterItem.headshot.asset.fluid} alt={rosterItem.headshot.alt} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-full">
                    <p className="text-small font-bold uppercase text-black">{rosterItem.personName}</p>
                  </div>
                  <div className="w-full h-full">
                    <PortableText blocks={raw.roster[index].pageBuilderBody} />
                  </div>
                </div>
              </div>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

export default PageBuilderRoster