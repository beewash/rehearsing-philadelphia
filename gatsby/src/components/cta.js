import React from "react"
import {Link} from "gatsby"

const CTA = ({ block }) => {
  const { linkText, linkTo, bgColor, bgHoverColor, textColor, textHoverColor } = block

  return (
    <section id="cta" className="max-w-6xl mx-auto px-4 md:px-2.5 pb-28">
      <div className={`w-max mx-auto py-2 text-cfsSM md:text-cfs font-acuminPro font-medium uppercase text-center text-${textColor} bg-${bgColor} border-black border-2 rounded-full hover:bg-${bgHoverColor} hover:text-${textHoverColor}`}>
        {linkTo.externalContent ? (
          <a href={linkTo.linkUrl} target='_blank' rel="noreferrer" className="px-16">{linkText}</a>
        ) 
          : <Link to={`/${linkTo.linkUrl}`} className="px-16">{linkText}</Link>
        }
      </div>
    </section>
  )
}

export default CTA