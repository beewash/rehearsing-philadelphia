import React from "react";
import {Link} from 'gatsby'
// import Image from 'gatsby-image'

const PageBuilderSocial = ({ block }) => {
  const { socialList } = block

  return (
    <section id="pageBuilderSocial" className="max-w-6xl mx-auto px-6 pb-28" key={socialList.key}>
      <p className="font-medium mb-4">Social</p>
      <div>
        {socialList[0].socialLink.externalContent ? (
          <a href={socialList[0].socialLink.linkUrl} target='_blank' rel='noopener noreferer'><p>{socialList[0].linkText}</p></a>
        ) 
          : <Link to={`/${socialList[0].socialLink.linkUrl}`}><p>{socialList[0].linkText}</p></Link>
        }
      </div>
    </section>
  );
};

export default PageBuilderSocial;