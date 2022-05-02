import React, { useState, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { RadioContext } from '../../context/RadioContextProvider'

const Radio = () => {
  const radioContext = useContext(RadioContext)
  const {
    playlist,
    currentMusicIndex,
    setSong,
    handleClickNext,
    handleClickPrevious
  } = radioContext

  return (
    <section id="radio" className="z-30 h-12 sticky bottom-0 bg-white border-t-2 border-black w-full flex justify-items-center items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <AudioPlayer
          src={playlist[currentMusicIndex].audio.asset.url}
          layout="horizontal-reverse"
          customControlsSection={
            [
              RHAP_UI.MAIN_CONTROLS,
              <div className="">{playlist[currentMusicIndex].title}</div>,
              RHAP_UI.VOLUME_CONTROLS,
              RHAP_UI.SKIP_CONTROLS
            ]
          }
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={() => setSong(currentMusicIndex < playlist.length -1 ? currentMusicIndex + 1 : 0)}
        />
      </div>
    </section>
  )
}

export default Radio