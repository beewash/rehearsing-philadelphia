import React, {useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export const queryRadio = graphql`
{
  radio: allSanityRadio {
    edges {
      node {
        title
        module
        audio {
          asset {
            url
          }
        }
      }
    }
  }
}`

const Radio = () => {
  const data = useStaticQuery(queryRadio)
  const playlist = data.radio.edges.map(edges => edges.node)
  
  const [currentMusicIndex, setSong] = useState(0)

  const handleClickPrevious = () => {
    const previousSong = currentMusicIndex === 0 ? playlist.length -1 : currentMusicIndex -1
    setSong(previousSong)
  }

  const handleClickNext = () => {
    const nextSong = currentMusicIndex < playlist.length -1 ? currentMusicIndex + 1 : 0
    setSong(nextSong)
  }

  return (
    <section id="radio" className="z-30 h-12 sticky bottom-0 bg-white border-t-2 border-black w-full flex justify-items-center items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <AudioPlayer
          src={playlist[currentMusicIndex].audio.asset.url}
          layout="horizontal-reverse"
          customControlsSection={
            [
              RHAP_UI.MAIN_CONTROLS,
              <div>{playlist[currentMusicIndex].title}</div>,
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