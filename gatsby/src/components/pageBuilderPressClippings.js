import React from "react";
import {Link} from 'gatsby'
import press from "../../../sanity/schemas/documents/press";

const PageBuilderPressClippings = ({ block }) => {
  const { pressItem } = block

  return (
    <section id="pageBuilderPressClippings" className="max-w-6xl mx-auto px-6 pb-28">
      <div className="flex-row space-y-8 md:flex md:space-y-0">
        <div className="md:w-1/3">
          <h4 className="normal-case font-normal">Latest Posts</h4>
        </div>
        <div className="md:w-2/3 flex-row">
        {pressItem.map((pressItem, index) =>
          <div className="mb-8 pb-8 border-b-2 border-black last:border-b-0" key={index}>
            <div>
              <div className="mb-2">
                <Link to={pressItem.pressLink} target="_blank">
                  <h4 className="normal-case font-normal hover:underline">{pressItem.pressTitle}</h4>
                </Link>
              </div>
              <div className="space-x-1">
                <p className="inline-block">By</p>
                <p className="inline-block font-medium">{pressItem.pressAuthor}</p>
              </div>
              <div className="space-x-1">
                <p className="inline-block">on</p>
                <p className="inline-block">{pressItem.publishDate}</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default PageBuilderPressClippings;