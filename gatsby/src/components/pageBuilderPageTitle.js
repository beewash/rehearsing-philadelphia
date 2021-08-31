import React from "react";
import PortableText from "./portableText";

const PageBuilderPageTitle = ({ block, raw, index }) => {
  const { title } = block;

  return (
    <section id="pageBuilderPageTitle" className="w-screen mb-20 md:mb-48 overflow-hidden">
      <div className="relative text-center mt-16 md:mt-32">
        <h1 className="text-black">{title}</h1>
        <div className="text-black px-8 mt-12 md:w-3/5 md:mt-24 mx-auto">
          <PortableText blocks={raw.body} />
        </div>
      </div>
    </section>
  );
};

export default PageBuilderPageTitle;