import React from "react";
import Image from "gatsby-image";
import PortableText from "./portableText";

const PageBuilderContent = ({ block, raw, index }) => {
  const { image, title } = block;

  return (
    <section id="pageBuilderContent" className="max-w-6xl mx-auto px-4 md:px-2.5 pb-28">
      <Image fluid={image.asset.fluid} alt={image.alt} />
      <h1>{title}</h1>
      <PortableText blocks={raw.body} />
    </section>
  );
};

export default PageBuilderContent;