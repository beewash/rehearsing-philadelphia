import React, { useContext } from "react"
import Image from "gatsby-image"
import { RiPlayFill } from 'react-icons/ri'
import { RadioContext } from "../context/RadioContextProvider"


const PageBuilderRadio = () => {
  const radioContext = useContext(RadioContext)
  const {
    playlist,
    currentMusicIndex,
    isPlaying,
    handlePlay
  } = radioContext
  return (
    <section className="class=max-w-6xl mx-auto px-6 pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {playlist.map(radioItem => (
          <div key={radioItem._id} className="border-2 rounded-md border-black group cursor-pointer" onClick={handlePlay(radioItem.position)} aria-lable={`${radioItem.title} button`}>
            <div className="md:h-60 lg:h-48 relative">
              <div 
                class={`w-full h-full absolute group-hover:flex items-center justify-center bg-black/60 top-0 left-0 z-10 ${currentMusicIndex === radioItem.position && isPlaying ? 'flex' : 'hidden' }`}
              >
                <RiPlayFill color="white" size="50px" />
              </div>
              <Image fluid={radioItem.thumbnail?.asset.fluid} className="object-cover h-full w-full" />
            </div>
            <div className="p-2 space-y-2 flex flex-col justify-between">
              <h5 className="line-clamp-2 font-semibold">
                {radioItem.secondaryTitle}
              </h5>
              <h6 className="text-xs">
                {radioItem.date}
              </h6>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default PageBuilderRadio