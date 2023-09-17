import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface PortfolioCareersProps {
  id?: string;
  item?: PortfolioCareersItem[];
}

export interface PortfolioCareersItem {
  image: LiveImage;
  width?: number;
  height?: number;
  label?: string;
  link?: string;
}

export default function PortfolioCareers(props: PortfolioCareersProps) {
  return (
    <div
      class="max-w-[1440px] mx-auto pb-[100px]"
      id={props.id}
    >
      <ul class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[4vw] w-fit mx-auto mt-[20px]">
        {props.item?.map((item) => {
          return (
            <li class="max-w-[239.99px] w-full lg:max-h-[134.99px] max-h-[90px] px-[70px] py-[49px] my-[15px] w-fit border border-transparent hover:border-[#4343431a] transition-all duration-300 rounded-[8px] flex items-center">
              <a href={item.link} target="_blank">
                <Image
                  src={item.image}
                  width={item.width || 239.99}
                  height={item.height || 133.48}
                  class="max-w-[239.99] w-auto-80  max-h-[133.48px]"
                  alt={item.label}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
