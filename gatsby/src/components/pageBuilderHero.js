import React from "react";
import Image from "gatsby-image";
import PortableText from "./portableText";

const PageBuilderHero = ({ block, raw, index }) => {
  const { image, title } = block;

  return (
    <section id="pageBuilderHero" className="w-screen mb-28 h-screen overflow-hidden">
      <Image fluid={image.asset.fluid} alt={image.alt} />
      <h1>{title}</h1>
      <PortableText blocks={raw.body} />
    </section>
  );
};

export default PageBuilderHero;