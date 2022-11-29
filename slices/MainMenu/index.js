import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuModal from "../../components/MenuModal";
import MenuModalImage from "../../public/portfoliomenu.svg"
import Alert from "../../components/Alert";


const MainMenu = ({ slice }) => {
  const router = useRouter();
  const style = router.asPath === "/" ? "h-screen -mt-32" : "";
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const email = "andrei@andrei.com"; //prismicH.asText(slice.primary.email);
  return (
    <Bounded as="section" className=" bg-yellow-200  overflow-hidden     ">
      <div className={`${style} flex flex-col items-center justify-center`}>
        <div className=" mb-12  flex  flex-col  ">
          <div className="langsel">
            <ul className="langsprite">
              <Link href="#en">
                <a>
                  <li className="en"></li>
                </a>
              </Link>
              <Link href="#pt">
                <a>
                  <li className="pt"></li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center   ">
          <div className="relative  sm:w-[600px] w-[300px] ">
            <Link href="/">
              <a>
                {prismicH.isFilled.image(slice.primary.logo) && (
                  <PrismicNextImage
                    field={slice.primary.logo}
                    className=" "
                    layout="responsive"
                  />
                )}
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar sm:transform-none scale-[0.56] ">
          <ul className="navsprite">
            
              <a onClick={() => setModalOpen(true)}>
                <li className="work"></li>
              </a>
            
            <Link href="/info">
              <a>
                <li className="info"></li>
              </a>
            </Link>
            
              <a>
                <li className="contact" onClick={() => {
                  navigator.clipboard.writeText(email)
                  setAlertOpen(true)
                  }}></li>
              </a>
            
            <Link href="https://instagram.com/amoyssiadis" >
              <a>
                <li className="instagram"></li>
              </a>
            </Link>
          </ul>
          <Alert email={email} isOpen={alertOpen} setIsOpen={setAlertOpen} />
        </div>
        <MenuModal isOpen={modalOpen} setIsOpen={setModalOpen} image={MenuModalImage} />
        
      </div>
    </Bounded>
  );
};

export default MainMenu;
