import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { useEffect, useState } from "preact/hooks";

export interface ArticleProps {
  /** @description example: header */
  id?: string;
  src: LiveImage;
  subTitle?: string;
  title: HTML;
  /** @format textarea */
  description?: string;
  date?: string;
  icon?: LiveImage;
  article: HTML;
  backToTopIcon: LiveImage;
}

export default function Article(props: ArticleProps) {
  const background = {
    backgroundImage: `url(${props.src})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    top: "0%",
    bottom: "auto",
    left: "0%",
    right: "0%",
    position: "relative",
    display: "flex",
    zIndex: -1,
  };

  const [isVisible, setIsVisible] = useState(false);
  const percentageToAppear = 0.5;

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const positionToAppear = documentHeight * percentageToAppear;
      setIsVisible(scrollY + windowHeight >= positionToAppear);
    }
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="relative -mt-[75.98px]">
      <span class="sm:h-[80vh] h-[60vh]" style={background} id={props.id}>
      </span>
      <div class="flex flex-col max-w-[1190px] mx-auto w-full bg-white lg:px-[100px] lg:py-[70px] md:py-[70px] px-[30px] py-[35px] relative z-0 sm:-mt-[28vh]">
        <p class="text-[#434343] text-[16px] font-normal sm:mb-[20px] mb-[10px] text-center">
          {props.subTitle}
        </p>
        <HTMLRenderer
          html={props.title}
          class="lg:text-[50px] md:text-[40px] text-[28px] font-semibold leading-[1.1em] lg:mt-[10px] lg:mb-[20px] my-[10px] text-center"
        />
        <p class="lg:text-[21px] text-[18px] text-center italic max-w-[770px] mx-auto leading-[1.6em] text-[#333]">
          {props.description}
        </p>
        {props.date && (
          <div class="flex items-center sm:mx-auto mt-[70px]">
            <Image
              src={props.icon || ""}
              class="w-[38px] h-[38px] mr-[10px]"
              width={38}
              height={36}
              alt={props.date}
            />
            <p class="text-[#838383] text-[16px]">{props.date}</p>
          </div>
        )}
        <div class="mx-auto sm:pt-[70px] pt-[35px]">
          <HTMLRenderer
            html={props.article}
            class="lg:text-[21px] text-[18px]"
          />
        </div>
        {isVisible && (
          <div class="fixed bottom-[1.5rem] right-[calc(100%-90%)] max-w-[1200px] w-full mx-auto flex justify-end">
            <a
              href={`#${props.id}`}
            >
              <Image
                src={props.backToTopIcon || ""}
                class="sm:w-[48px] w-[35px] sm:h-[48px] h-[35px]"
                width={48}
                height={48}
                alt="Back to Top"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
