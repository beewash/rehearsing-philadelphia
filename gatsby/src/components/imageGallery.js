import React, { useState } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Button from './button'

const ImageGallery = ({ block, raw }) => {
  const { images } = block
  const allCategories = ['All', ...new Set(images.map(image => image.moduleList))]
  const [gallery, setGallery] = useState(images)
  const filter = (button) =>{
    if(button === 'All'){
      setGallery(images);
      return
    }

    const filteredData = images.filter(image => image.moduleList === button)
    setGallery(filteredData)
  }
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  // shuffle(gallery)
  return (
    <>
      <section className="class=max-w-6xl mx-auto px-6 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <Button button={allCategories} filter={filter} />
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="columns-1 md:columns-2 lg:columns-4">
              {gallery.map(image => (
                <div key={image._key} className="galleryItem">
                  <Link to={`${image.asset.url}`}>
                    <Image fluid={image.asset.fluid} alt={image.alt} />
                  </Link>
                </div>
              ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </section>
    </>
  )
}

export default ImageGallery