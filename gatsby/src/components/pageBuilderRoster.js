import React, {useState} from 'react'
import Image from "gatsby-image"
import {Link} from 'gatsby'
import PortableText from './portableText'

const PageBuilderRoster = ({block, raw}) => {
  const {title, roster} = block

  console.log('roster: ', roster)

  const [rosterItem, setRoster] = useState([]);

  return (
    <section id="Roster" className='max-w-6xl mx-auto px-6 pb-28'>
      <div className='container mx-auto flex flex-col py-4'>
        <div className="mb-8">
          <h4 className="normal-case" >{title}</h4>
        </div>
        <div className="hidden">
          <select>
            <option value="">Select a Module</option>
            <option value="solo-yellow">Solo</option>
            <option value="duet-red">Duet</option>
            <option value="ensemble-blue">Ensemble</option>
            <option value="orchestra-green">Orchestra</option>
          </select>
        </div>
        <div id="rosterList" className="grid gap-y-4 gap-x-2 md:gap-4 justify-between grid-cols-100 md:grid-cols-150">
        {roster && roster.map((rosterItem, index) =>
          <div id="rosterItem" key={rosterItem.slug.current} className={`relative hover-trigger w-full h-24.5 md:h-36.5 flex items-center justify-center bg-white border-black border-2 rounded-full hover:bg-${rosterItem.hoverColor} hover:text-white`}>
              <div id="textContainer" className="relative">
                <Link href={`/${rosterItem.slug.current}`}>
                  <div className="w-4/5 mx-auto">
                    <p className="text-cfsSM2 md:text-cfsSM font-acuminPro font-medium text-center">{rosterItem.personName}</p>
                  </div>
                </Link>
              </div>
              <div id="popUp" className="hidden absolute top-50 bottom-50 right-100 w-full z-50 bg-white border-black border-2 rounded-3xl hover-target overflow-hidden flex-column">
                <div className="w-300 h-500">
                  <Image fluid={rosterItem.headshot.asset.fluid} alt={rosterItem.headshot.alt} className="w-full h-full object-cover" />
                </div>
                <div className="hidden">
                  <span className="bg-solo-yellow"></span>
                  <span className="bg-duet-red"></span>
                  <span className="bg-ensemble-blue"></span>
                  <span className="bg-orchestra-green"></span>
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