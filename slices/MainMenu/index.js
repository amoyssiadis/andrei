import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = ({ slice }) => {
  const router = useRouter();
  const style = router.asPath === "/" ? "h-screen" : "";
  return (
    <Bounded as="section" className="relative ">
      <div className={`${style} mainMenu {style}  flex flex-col items-center `}>
        <div className="justify-right m-auto mb-6  flex w-[700px] flex-col items-end ">
          <div className="flex items-center justify-center  gap-8 text-2xl">
            <Link href="#en">
              <a>
                <div>en</div>
              </a>
            </Link>
            <div>/</div>
            <Link href="#pt">
              <a>
                <div>pt</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl md:w-[600px]">
            <Link href="/">
              <a>
                {prismicH.isFilled.image(slice.primary.logo) && (
                  <PrismicNextImage
                    field={slice.primary.logo}
                    layout="responsive"
                    className="relative"
                  />
                )}
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar">
          <ul className="navsprite">
            <Link href="/work">
              <a>
                <li className="work"></li>
              </a>
            </Link>
            <Link href="/info">
              <a>
                <li className="info"></li>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <li className="contact"></li>
              </a>
            </Link>
            <Link href="#ig">
              <a>
                <li className="instagram"></li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </Bounded>
  );
};

export default MainMenu;
