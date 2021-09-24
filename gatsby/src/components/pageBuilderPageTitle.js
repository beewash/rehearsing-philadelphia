import React from "react";
import PortableText from "./portableText";

const PageBuilderPageTitle = ({ block, raw, index }) => {
  const { title } = block;

  return (
    <section id="pageBuilderPageTitle" className="w-screen mb-20 md:mb-48">
      <div className="text-center px-4 mt-16 md:px-8 md:mt-32">
        {title ? (
          <h1 className="text-black">{title}</h1>
        ) : null}
        {raw.body ? (
          <div className="text-black px-8 mt-12 lg:w-3/5 md:mt-24 mx-auto">
            <PortableText blocks={raw.body} />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageBuilderPageTitle