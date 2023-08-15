import { useState } from "preact/compat";
import Image from "deco-sites/std/components/Image.tsx";
import { CardInfo } from "../sections/Portifolio.tsx";

/*
export interface CardInfo {
  image?: LiveImage;
  description?: string;
  founder?: string;
  website?: string;
  sector?: string;
  coinvestors?: string;
}
*/

export default function PortifolioCard(props: CardInfo) {
  const { image, description, founder, website, sector, coinvestors } = props;
  const [openDialog, setDialog] = useState<boolean>(false);

  const toggleVisibility = () => {
    openDialog ? setDialog(false) : setDialog(true);
  };

  return (
    <div className={`relative `}>
      <div /*Image container*/
        onClick={() => {
          toggleVisibility();
        }}
        className={`px-[20px] py-[50px]`}
      >
        <Image src={image || ``} width={88} class={`h-auto`} />
      </div>
      <div
        className={`${
          !openDialog
            ? `hidden `
            : `lg:bg-[rgb(255,255,255,0.5)] fixed top-0 left-0 bg-white w-[100vw] h-[100vh] px-[35px] py-[135px] z-50 lg:flex lg:justify-center lg:items-center`
        }`}
      >
        <div
          className={`lg:px-[60px] lg:py-[100px] lg:max-w-[800px] lg:bg-white lg:border-2 lg:border-[#f5f5f5] rounded-lg`}
        >
          <div
            className={`cursor-pointer flex justify-between relative px-[15px] mb-[40px]`}
          >
            <Image src={image || ``} width={100} />
            <Image
              className={`absolute top-[-45px] right-[0px]`}
              src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5cab6e021aed369c9b738cb4_modal-close-button.png `}
              width={65}
              onClick={() => {
                toggleVisibility();
              }}
            />
          </div>
          <p
            className={`text-[14px] text-[#333] leading-[1.5em] font-["Posteramatext"] font-light mb-[30px]`}
          >
            {description}
          </p>

          <div className={`mb-[20px]`}>
            <p
              className={`text-[#002fa7] text-[18px] font-semibold font-["Posteramatext"]`}
            >
              Founder
            </p>
            <p
              className={`text-[#333] text-[14px] font-["Posteramatext"] font-normal`}
            >
              {founder}
            </p>
          </div>

          <div className={`mb-[20px]`}>
            <p
              className={`text-[#002fa7] text-[18px] font-semibold font-["Posteramatext"]`}
            >
              Website
            </p>
            <p
              className={`text-[#333] text-[14px] font-["Posteramatext"] font-normal`}
            >
              <a href={`https://www.${website}`} target="_blank">{website}</a>
            </p>
          </div>

          <div className={`mb-[20px]`}>
            <p
              className={`text-[#002fa7] text-[18px] font-semibold font-["Posteramatext"]`}
            >
              Sector
            </p>
            <p
              className={`text-[#333] text-[14px] font-["Posteramatext"] font-normal`}
            >
              {sector}
            </p>
          </div>

          <div className={`mb-[20px]`}>
            <p
              className={`text-[#002fa7] text-[18px] font-semibold font-["Posteramatext"]`}
            >
              Co-Investors
            </p>
            <p
              className={`text-[#333] text-[14px] font-["Posteramatext"] font-normal`}
            >
              {coinvestors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
