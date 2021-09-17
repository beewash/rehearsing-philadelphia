import React from 'react'
import {Link} from 'gatsby'
import Image from "gatsby-image"

function Roster({rosterItem}) {
  return (
    <div id="rosterList" className="grid gap-y-4 gap-x-2 md:gap-4 justify-between grid-cols-100 md:grid-cols-150">
        {rosterItem && rosterItem.map((rosterItem, index) =>
          <div id="rosterItem" key={rosterItem.slug.current} className={`relative hover-trigger w-full h-24.5 md:h-36.5 flex items-center justify-center bg-white border-black border-2 rounded-full hover:bg-${rosterItem.hoverColor} hover:text-white`}>
              <div id="textContainer" className="relative">
                <Link to={`/${rosterItem.slug.current}`}>
                  <div className="w-4/5 mx-auto">
                    <p className="text-cfsSM2 md:text-cfsSM font-acuminPro font-medium text-center">{rosterItem.personName}</p>
                  </div>
                </Link>
              </div>
              <div id="popUp" className="hidden absolute top-50 bottom-50 right-100 w-full z-50 bg-white border-black border-2 rounded-3xl hover-target overflow-hidden flex-column">
                <div className="w-300 h-500">
                  <Image fluid={rosterItem.headshot.asset.fluid} alt={rosterItem.headshot.alt} className="w-full h-full object-cover" />
                </div>
              </div>
          </div>
        )}
        </div>
  )
}

export default Roster