import React from 'react'

const PageBuilderVideoEmbed = ({ block: { videoUrl } }) => {
  const videoId = new URL(videoUrl).searchParams.get('v')

  if (!videoId) {
    throw new Error('Video URL is invalid, must have "v" query param (ex: "https://youtube.com/watch?v=ePDO5st8jv0"')
  }

  return (
    <section id="videoEmbed" className="w-full h-full">
      <div className="px-4 rounded-lg aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Embed"
        />
      </div>
    </section>
  )
}

export default PageBuilderVideoEmbed