import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { CardListProps, useCards } from "deco-sites/start/hooks/useCards.ts";

export interface BlogCardProps extends CardListProps {
  title: HTML;
  maxCards: number;
  buttonLabel?: string;
  iconButton?: LiveImage;
}

export interface Card {
  image?: LiveImage;
  label?: string;
  data?: string;
  link?: Link;
}

export interface Link {
  url?: string;
  label?: string;
  icon?: LiveImage;
}

export default function BlogCard(props: BlogCardProps) {
  const { title, cards, maxCards } = props;
  const { activeCard, visibleCards, handleDiscoverMore } = useCards(
    cards,
    maxCards,
  );

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div class="lg:px-[100px] md:px-[50px] sm:px-[49px] px-[25px] mx-auto">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col lg:py-[150px] md:py-[120px] sm:py-[60px] py-[120px]">
          <HTMLRenderer
            html={title}
            class="mt-[10px] lg:mb-[110px] mb-[50px] leading-[1.1em] lg:text-[50px] text-[36px] text-center"
          />
          <div class="grid 2xl-card:grid-cols-2 grid-cols-1">
            {cards?.slice(0, visibleCards[activeCard]).map((card, index) => (
              <div
                class={`flex md:flex-row flex-col md:items-center lg:px-[10px] mb-[75px] ${
                  index === cards.length - 1 && !(cards.length % 2 === 0)
                    ? "2xl-card:col-span-2 col-span-1"
                    : ""
                }`}
              >
                <Image
                  src={card.image || ""}
                  width={270}
                  height={270}
                  class="rounded-[10px] lg:w-[270px] lg:h-[270px] md:w-[240px] md:h-[240px] w-full h-[260px] object-cover"
                  alt={card.label}
                />
                <div class="md:ml-[40px] md:mt-0 mt-[40px] lg:pr-[50px]">
                  <p class="text-[#002fa7] font-bold mt-[12px] mb-[16px] sm:text-[31px] text-[30px] leading-[43px]">
                    {card.label}
                  </p>
                  <p class="text-[#838383] text-[16px] leading-[19px]">
                    {card.data}
                  </p>
                  <a
                    href={card.link?.url}
                    class="flex items-center mt-[40px] text-[15px] font-semibold text-[#434343]"
                  >
                    {card.link?.label}
                    <span class="bg-[#feb13f] hover:opacity-[.7] rounded-full lg:w-[28px] w-[20px] lg:h-[28px] h-[20px] flex justify-center items-center ml-[20px]">
                      <Image
                        src={card.link?.icon || ""}
                        width={28}
                        height={16}
                        alt="arrow-icon"
                      />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {cards && visibleCards[activeCard] < cards.length && (
            <button
              onClick={handleDiscoverMore}
              class="flex items-center sm:text-[15px] text-[12px] font-semibold text-[#434343] mx-auto py-[10px] sm:mt-[60px] mt-[40px]"
              aria-label={props.buttonLabel}
            >
              {props.buttonLabel}
              <span class="bg-[#feb13f] hover:opacity-[.7] rounded-full lg:w-[28px] w-[20px] lg:h-[28px] h-[20px] flex justify-center items-center ml-[20px]">
                <Image
                  src={props.iconButton || ""}
                  width={9}
                  height={17}
                  alt="arrow-icon"
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
