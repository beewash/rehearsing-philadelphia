import React from "react";
import Image from "gatsby-image";
import PortableText from "./portableText";

const PageBuilderHero = ({ block, raw, index }) => {
  const { image, title } = block;

  return (
    <section id="pageBuilderHero" className="w-screen h-screen mb-28 overflow-hidden">
      <div className="relative z-20 text-center mt-32">
        <h1 className="text-white">{title}</h1>
        <div className="text-white w-3/5 mt-24 mx-auto">
          <PortableText blocks={raw.body} />
        </div>
      </div>
      {image ? (
      <div className="absolute w-screen top-0 left-0">
        <div className="absolute w-screen h-screen  top-0 left-0 bg-black z-10 bg-opacity-20"></div>
        <Image fluid={image.asset.fluid} alt={image.alt} className="object-cover h-screen overflow-hidden" />
      </div>
      ) : null}
    </section>
  );
};

export default PageBuilderHero;