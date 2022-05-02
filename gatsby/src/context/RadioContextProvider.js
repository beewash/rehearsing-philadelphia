import React, {useState, createRef} from "react";
import { graphql, useStaticQuery } from 'gatsby'

export const RadioContext = React.createContext();

export const queryRadio = graphql`
{
  radio: allSanityRadio {
    edges {
      node {
        _id
        _type
        title
        secondaryTitle
        date
        module
        position
        audio {
          asset {
            url
          }
        }
        thumbnail {
          alt
          _key
          asset {
            url
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}`

const RadioContextProvider = ({children}) => {
  const data = useStaticQuery(queryRadio)
  const playlist = data.radio.edges.map(edges => edges.node)
  playlist.sort((a,b) => (a.position > b.position) ? 1 : -1)
  
  const [currentMusicIndex, setSong] = useState(0)
  const [isPlaying, setPlay] = useState(false)
  
  const radioRef = createRef()

  const handlePlay = position => () => {
    setSong(position)
    if (isPlaying == true) {
      radioRef.current.audio.current.pause();
    }
  }

  const handleClickPrevious = () => {
    const previousSong = currentMusicIndex === 0 ? playlist.length -1 : currentMusicIndex -1
    setSong(previousSong)
  }

  const handleClickNext = () => {
    const nextSong = currentMusicIndex < playlist.length -1 ? currentMusicIndex + 1 : 0
    setSong(nextSong)
  }

  return (
    <RadioContext.Provider value={{playlist, radioRef, currentMusicIndex, isPlaying, setPlay, setSong, handlePlay, handleClickNext, handleClickPrevious}}>
      {children}
    </RadioContext.Provider>
  )
}

export default RadioContextProvider;
