import React from "react";
import Image from "gatsby-image";
import PortableText from "./portableText";

const PageBuilderContent = ({ block, raw, index }) => {
  const { image, title } = block;

  return (
    <section>
      <Image fluid={image.asset.fluid} alt={image.alt} />
      <h1>{title}</h1>
      <PortableText blocks={raw.body} />
    </section>
  );
};

export default PageBuilderContent;