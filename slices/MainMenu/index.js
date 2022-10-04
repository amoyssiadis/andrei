import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
const MainMenu = ({ slice }) => (
  <Bounded as="section" className="bg-white">
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl md:w-[600px]">
        {prismicH.isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            layout="responsive"
            className="relative"
          />
        )}
      </div>
    </div>
  </Bounded>
);

export default MainMenu;
