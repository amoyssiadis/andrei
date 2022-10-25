import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import FloatingImage from "../FloatingImage";
// import * as prismicH from "@prismicio/helpers";

const AboutTextWithButton = ({ slice }) => (
  <section>
    <div className="mx-auto mt-14 min-w-[600px] max-w-[1200px] flex-row px-4 md:flex ">
      <div className="relative">
        <div className="w-2/4">
          <PrismicRichText field={slice.primary.about} />
        </div>
        <div className="mr-2 w-fit">
          <PrismicLink field={slice.primary.button_link}>
            <button className="rounded-md bg-gray-800 px-4 py-2 text-white">
              {slice.primary.button_name}
            </button>
          </PrismicLink>
        </div>
      </div>

      <div className="mt-10 w-fit bg-red-300 md:mt-0">
        <FloatingImage slice={slice} />
      </div>
    </div>
  </section>
);

export default AboutTextWithButton;
