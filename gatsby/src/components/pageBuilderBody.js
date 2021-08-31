import React from "react";
import PortableText from "./portableText";

const PageBuilderBody = ({ raw, index }) => {

  return (
    <section id="pageBuilderBody" className="max-w-6xl mx-auto px-4 md:px-2.5 pb-28">
      <PortableText blocks={raw.body} />
    </section>
  );
};

export default PageBuilderBody;