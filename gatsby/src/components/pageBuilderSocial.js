import React from "react";
import {Link} from 'gatsby'
// import Image from 'gatsby-image'

const PageBuilderSocial = ({ block }) => {
  const { socialList } = block

  return (
    <section id="pageBuilderSocial" className="max-w-6xl mx-auto px-6 pb-28" key={socialList.key}>
      <p className="font-medium mb-4">Social</p>
      <div>
        {socialList[0].link.externalContent ? (
          <a href={socialList[0].link.linkUrl} target='_blank' rel="noreferrer"><p>{socialList[0].linkText}</p></a>
        ) 
          : <Link to={`/${socialList[0].link.linkUrl}`}><p>{socialList[0].linkText}</p></Link>
        }
      </div>
    </section>
  );
};

export default PageBuilderSocial;