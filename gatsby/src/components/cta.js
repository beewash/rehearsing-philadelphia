import React from "react";
import {Link} from "gatsby";

const CTA = ({ block }) => {
  const { linkText, linkTo } = block;

  console.log('link: ', linkTo)

  return (
    <section id="cta" className="max-w-6xl mx-auto px-4 md:px-2.5 pb-28">
      <div className="w-full py-2 px-4 font-acuminPro font-medium uppercase text-center text-white bg-orchestra-green border-black border-2 rounded-full hover:bg-black hover:text-white">
        {linkTo.externalContent ? (
          <a href={linkTo.linkUrl} target='_blank' rel='noopener noreferer'>{linkText}</a>
        ) 
          : <Link to={`/${linkTo.linkUrl}`} >{linkText}</Link>
        }
      </div>
    </section>
  );
};

export default CTA;