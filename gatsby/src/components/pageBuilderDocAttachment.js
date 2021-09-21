import React from "react"

const PageBuilderDocAttachment = ({ block, raw }) => {
  const { docName, externalContent, externalLink, document } = block

  return (
    <section id="docAttachment" className="max-w-6xl mx-auto px-6 pb-28 text-center">
      {externalContent ? (
      <>
        <a rel="noopener noreferrer" href={externalLink} target="_blank"><p>{docName}</p></a>
      </>
      ) : <>
            <a rel="noopener noreferrer" href={document.asset.url} target="_blank"><p className="underline">{docName}</p></a>
          </>
      }
    </section>
  )
}

export default PageBuilderDocAttachment