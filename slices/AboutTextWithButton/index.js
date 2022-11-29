import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import FloatingImage from "../FloatingImage";

// import * as prismicH from "@prismicio/helpers";

const AboutTextWithButton = ({ slice }) => (
  <section>
    <div className="mx-auto sm:mt-14 min-w-screen max-w-[1200px] flex-row px-4 md:flex ">
      <div className="relative md:pl-8 md:pr-8 ">
        <div className="md:pr-20 max-w-[940px] ">
          <PrismicRichText field={slice.primary.about} />
        </div>
        <div className="w-full  mt-2 max-w-[850px] sm:text-right text-center ">
          <PrismicLink field={slice.primary.button_link}>
            <button className="rounded-md bg-gray-800 px-4 py-2 text-white">
              {slice.primary.button_name}
            </button>
          </PrismicLink>
        </div>
      </div>

      <div className="sm:absolute right-10 static mt-10 w-fit md:mt-0 md:mr-10 mx-auto ">
        <FloatingImage slice={slice} />
      </div>

    </div>
    
  </section>
);

export default AboutTextWithButton;
