import PortifolioCard from "../islands/PortifolioCard.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
export interface Props {
  subTitle?: string;
  title?: string;
  cards?: CardInfo[];
  morePortifolioHref?: string;
}

/** @title {{label}} */
export interface CardInfo {
  website?: string;
  image?: LiveImage;
  label?: string;
  /** @format textarea */
  description?: string;
  /** @format textarea */
  founder?: string;
  /** @format textarea */
  sector?: string;
  /** @format textarea */
  coinvestors?: string;
}

export default function Portifolio(props: Props) {
  const { subTitle, title, cards, morePortifolioHref } = props;

  return (
    <section
      className={`py-[120px] px-[20px] bg-[#f9fafc] lg:px-[115px] lg:mb-[30px]`}
    >
      <p
        className={`font-["Posteramatext"] mb-[5px] text-[#002fa7] text-[10px] uppercase tracking-[4px] lg:text-[16px] lg:tracking-[6px] lg:font-light`}
      >
        {subTitle}
      </p>

      <div className={`flex flex-row items-baseline mb-[35px]`}>
        <p
          className={` ml-[-3px] font-["Posteramatext"] font-semibold text-[#002fa7] text-[36px] lg:text-[80px]`}
        >
          {title}
        </p>
        <p
          class={`text-[#feb13f] text-[36px] font-["arial"] font-bold lg:text-[80px]`}
        >
          .
        </p>
      </div>

      <div
        className={`grid grid-cols-2 md:grid-cols-3 ml-[-55px] lg:grid-cols-4 lg:max-w-[1200px] lg:gap-[4vw] lg:ml-[-75px]`}
      >
        {cards?.map((item) => {
          return (
            <PortifolioCard
              image={item?.image}
              description={item?.description}
              founder={item?.founder}
              website={item?.website}
              sector={item?.sector}
              coinvestors={item?.coinvestors}
              label={item?.label}
            />
          );
        })}
      </div>

      <div className={`mt-[60px] mb-[20xp]`}>
        <a
          className={`flex flex-col lg:items-center lg:flex-row lg:gap-[20px] `}
          href={morePortifolioHref}
        >
          <p
            className={`uppercase text-[12px] font-bold font-["Posteramatext"] tracking-[2px] text-[#434343] lg:text-[16px] `}
          >
            Discover our portifolio companies
          </p>{" "}
          <div
            className={` flex align-center justify-center bg-[#feb13f] w-[18px] h-[18px] rounded-full lg:w-[28px] lg:h-[28px] items-center`}
          >
            <Image
              src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9b9427177dc81cad32c68_right-arrow.png`}
              width={16}
              className={`w-[16px] h-[9px] lg:w-[17px] lg:h-[10px]`}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
