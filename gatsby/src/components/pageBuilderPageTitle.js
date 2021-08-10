import React from "react";
import PortableText from "./portableText";

const PageBuilderPageTitle = ({ block, raw, index }) => {
  const { title } = block;

  return (
    <section id="pageBuilderPageTitle" className="w-screen mb-48 overflow-hidden">
      <div className="relative z-20 text-center mt-32">
        <h1 className="text-black">{title}</h1>
        <div className="text-black w-3/5 mt-24 mx-auto">
          <PortableText blocks={raw.body} />
        </div>
      </div>
    </section>
  );
};

export default PageBuilderPageTitle;