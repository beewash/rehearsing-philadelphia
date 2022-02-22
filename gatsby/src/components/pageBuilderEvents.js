import React from "react"
import { Link } from "gatsby"

const PageBuilderEvents = ({ block, raw }) => {
  const { title, calEvent } = block
  return (
    <>
      <section id="events" className="max-w-6xl mx-auto px-6 pb-28">
        <div className="mb-4">
          <h3>{title}</h3>
        </div>
        {calEvent.length > 0 ? (
          <div className="flex flex-col">
          {calEvent.map((event) => 
            <div key={event._key} className="event w-full mb-4">
              <Link to={`/${event.slug.current}`}>
                <p className="font-semibold">{event.title}</p>
                <div className="flex">
                  <p className="inline-block text-cfsSM2">{event.date}</p>
                  <p className="inline-block before:content-['•'] before:px-2 text-cfsSM2">{event.time}</p>
                </div>
              </Link>
            </div>
          )}
        </div>
        ) : (
          <>
            <div>There are no events currently scheduled for this module.</div>
            <div>Come back soon for updates!</div>
          </>
        )}
      </section>
    </>
  )
}

export default PageBuilderEvents