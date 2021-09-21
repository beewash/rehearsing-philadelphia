import React from 'react'
import PortableText from './portableText'
import {Link} from 'gatsby'

const GridBuilderTileAbout = ({block, raw, globalStyles}) => {
  const {title, tileColor, textColor, cta, colLayoutSection, rowLayoutSection} = block

  return (
    <section 
      id="tileAbout" 
      className={`bg-${tileColor} ${globalStyles} ${colLayoutSection.colSm} md:${colLayoutSection.colMd} lg:${colLayoutSection.colLg} md:${rowLayoutSection.rowMd} lg:${rowLayoutSection.rowLg}`} 
    >
      <div className={`text-${textColor}`}>
        <div className="mb-8">
          <p className="text-cfsL font-bold">{title}</p>
        </div>
        <div>
          <PortableText blocks={raw.description} />
        </div>
        {cta ? (
          <div className="mt-8 w-max py-1 px-4 font-acuminPro font-medium uppercase text-sm border-black border-2 rounded-full hover:bg-black hover:text-white">
            {cta.linkTo.externalContent ? (
              <a href={cta.linkTo.linkUrl} target='_blank' rel="noreferrer">{cta.linkText}</a>
            ) 
              : <Link to={`/${cta.linkTo.linkUrl}`}>{cta.linkText}</Link>
            }
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default GridBuilderTileAbout