import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

const FloatingImage = ({ slice }) => (
  <div className="w-[200px]">
    {prismicH.isFilled.image(slice.primary.image) && (
      <PrismicNextImage
        field={slice.primary.image}
        layout="responsive"
        className="relative"
      />
    )}
  </div>
);

export default FloatingImage;
