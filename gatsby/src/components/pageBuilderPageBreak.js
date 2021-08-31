import React from "react";
import Image from "gatsby-image";

const PageBuilderPageBreak = ({ block, raw }) => {
  const { pageBreak } = block;

  return (
    <section id="pageBreak" className="max-w-6xl mx-auto px-4 md:px-2.5 pb-28">
      <Image fluid={pageBreak.asset.fluid} alt={pageBreak.alt} className="w-10/12 md:w-2/4 h-full mx-auto object-cover" />
    </section>
  );
};

export default PageBuilderPageBreak;