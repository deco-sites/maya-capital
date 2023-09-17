import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface PortfolioItemProps {
  id?: string;
  item?: PortfolioItem[];
}

export interface PortfolioItem {
  /**@description choose the position of the element */
  position?: "image ⇆ text" | "text ⇆ image";
  image: LiveImage;
  width?: number;
  height?: number;
  label?: string;
  /** @format textarea */
  about: string;
  description?: Description[];
}

export interface Description {
  label: string;
  /** @format textarea */
  text: string;
  hasLink?: boolean;
}

export default function PortfolioItem(props: PortfolioItemProps) {
  return (
    <div
      class="max-w-[1440px] mx-auto flex flex-col"
      id={props.id}
    >
      {props.item?.map((item) => {
        const flexClasses = item.position === "image ⇆ text"
          ? "flex md:flex-row flex-col"
          : "flex md:flex-row-reverse flex-col";
        return (
          <div
            class={`${flexClasses} border border-[#f5f5f5] rounded-[14px] py-[100px] lg:px-[60px] md:px-[25px] px-[15px] mb-[60px] lg:mx-0 mx-[20px]`}
          >
            <div class="lg:w-[25%] md:mb-0 mb-[25px] px-[25px]">
              <Image
                src={item.image}
                width={item.width || 230}
                height={item.height || 150}
                class="max-w-[230px] w-auto-100 max-h-[150px]"
                alt={item.label}
              />
            </div>
            <div class="flex-1 md:px-[40px] px-[20px]">
              <p class="mb-[10px] text-[#333] md:text-[16px] text-[14px] font-light">
                {item.about}
              </p>
              <div class="grid md:grid-cols-2 grid-cols-1 md:mt-[60px] sm:mt-[40px] mt-[30px]">
                {item.description?.map((desc) => {
                  return (
                    <div class="sm:mb-[40px] mb-[25px] md:pr-[25px]">
                      <p class="mb-[5px] text-[#002fa7] text-[18px] font-semibold">
                        {desc.label}
                      </p>
                      {desc.hasLink
                        ? (
                          <a
                            href={`https://${desc.text}/`}
                            class="text-[#333] text-[16px] font-light"
                            target="_blank"
                          >
                            {desc.text}
                          </a>
                        )
                        : (
                          <p class="text-[#333] text-[16px] font-light">
                            {desc.text}
                          </p>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
