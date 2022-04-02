import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const PageBuilderCalendar = ({ block, raw }) => {
  const { events } = block
  return (
    <>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap md:border-t-2 md:border-black">
          {events.map((event) => 
          <div className={`event w-full md:w-[14.28%] pt-2 px-2 mb-24 ${event.calEvent.length == 0 ? 'hidden md:block' : ''}`}>
            <div className="mx-auto text-center border-b-2 border-black pb-2 mb-4">
              <p className="font-acuminPro font-bold text-cfs w-20 mx-auto">{event.title}</p>
            </div>
            <div className="space-y-4">
              {event.calEvent.map((event) => 
                <div className={`flex p-2 pl-4 pb-4 border-${event.module} border-2 bg-${event.module} hover:bg-white hover:text-black ${event.module == 'solo' ? 'text-black' : 'text-white'} rounded-md`}>
                  {event.icon ? (
                    <div className="hidden w-4 h-8 items-center mr-2">
                      <Image fluid={event.icon?.asset.fluid} alt={event.icon?.alt} className="w-full" />
                    </div>
                  ) : null}
                  <div className={`w-full`}>
                    <Link to={`/${event.slug?.current}`}>
                      <p className=" text-xs font-semibold mb-1">{event.title}</p>
                      {event.location ? (
                        <p className="text-xs mb-1">{event.location}</p>
                      ) : null}
                      <p className="text-xs">{event.time}</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PageBuilderCalendar