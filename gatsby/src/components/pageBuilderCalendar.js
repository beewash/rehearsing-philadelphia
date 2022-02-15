import React from "react"
import { Link } from "gatsby"

const PageBuilderCalendar = ({ block, raw }) => {
  const { events } = block
  console.log(events)
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pb-28">
        <div className="flex flex-wrap">
          {events.map((event) => 
          <div className="event w-full md:w-1/2 lg:w-1/3 mb-24">
            <div className="mx-auto text-center border-b-2 border-black pb-2 mb-4">
              <h3>{event.title}</h3>
            </div>
            <div className="md:w-2/3 mx-auto space-y-8">
              {event.calEvent.map((event) =>
                <div className="">
                  <Link to={`/${event.slug?.current}`}>
                    <p className="font-semibold">{event.title}</p>
                    <p className="">{event.time}</p>
                  </Link>
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