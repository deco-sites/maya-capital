import PortifolioCard from "../islands/PortifolioCard.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
export interface Props {
  subTitle?: string;
  title?: string;
  cards?: CardInfo[];
}

export interface CardInfo {
  website?: string;
  image?: LiveImage;
  description?: string;
  founder?: string;
  sector?: string;
  coinvestors?: string;
}

export default function Portifolio(props: Props) {
  const { subTitle, title, cards } = props;

  return (
    <section
      className={`py-[120px] px-[30px] background-[#f9fafc] lg:px-[115px]`}
    >
      <p
        className={`font-["Posteramatext"] text-[#002fa7] text-[10px] uppercase tracking-[4px] lg:text-[16px] lg:tracking-[6px]`}
      >
        {subTitle}
      </p>

      <div className={`flex flex-row items-baseline mb-[20px]`}>
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
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-[1200px]`}
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
            />
          );
        })}
      </div>
    </section>
  );
}
