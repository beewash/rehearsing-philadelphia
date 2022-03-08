import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Radio = props => {

  return (
    <StaticQuery
      key="radio_query"
      query={queryRadio}
      render={data => (
        <section id="radio" className="z-30 h-12 sticky bottom-0 bg-white border-t-2 border-black w-full flex justify-items-center items-center overflow-hidden">
            {data && data.radio.edges.map(({ node: audio }, index) => (
              <>
              {index > 0 ? (
                <div key={index} className="w-full">
                  <AudioPlayer
                    src={audio.audio.asset.url}
                    layout="horizontal-reverse"
                    customControlsSection={
                      [
                        RHAP_UI.MAIN_CONTROLS,
                        <div>{audio.title}</div>,
                        RHAP_UI.VOLUME_CONTROLS,
                      ]
                    }
                  />
                </div>
              ) :null}
              </>
            ))}
        </section>
      )}
    />
  )
}

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

export default Radio