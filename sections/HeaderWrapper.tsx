import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface HeaderWrapperProps {
  src: LiveImage;
  subTitle?: string;
  title: HTML;
  links?: Links[];
  icon?: LiveImage;
}

export interface Links {
  label?: string;
  url?: string;
  fontWeight?:
    | "light"
    | "normal"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  fontSize?: string;
}

export default function HeaderWrapper(props: HeaderWrapperProps) {
  const background = {
    backgroundImage:
      `linear-gradient(rgba(0, 47, 167, .82), rgba(0, 47, 167, .82)), url(${props.src})`,
    backgroundPosition: "0 0, 0 0",
    backgroundSize: "auto, cover",
    top: "0%",
    bottom: "auto",
    left: "0%",
    right: "0%",
    height: "38vh",
    position: "relative",
    display: "flex",
    zIndex: -1,
  };

  return (
    <div class="relative -top-[75.98px]">
      <span style={background}></span>
      <div class="flex flex-col lg:max-w-[1050px] md:max-w-[770px] sm:max-w-[500px] max-w-[370px] mx-auto w-full bg-white lg:px-[100px] lg:pt-[100px] md:px-[60px] sm:pt-[60px] sm:px-[40px] p-[35px] relative z-0 bottom-[18vh]">
        <p class="text-[#002fa7] lg:text-[16px] text-[10px] font-light tracking-[6px]">
          {props.subTitle}
        </p>
        <HTMLRenderer
          html={props.title}
          class="lg:text-[80px] sm:text-[50px] text-[36px] font-semibold -ml-[5px] leading-[1.1em] lg:mt-[10px] lg:mb-[20px] my-[10px]"
        />
        {props.links && (
          <nav class="flex items-center mt-[40px] py-[10px]">
            {props.links.map((link) => (
              <>
                <a
                  href={link.url}
                  class="mr-[40px] text-[#002fa7] hover:text-[#feb13f] hover:underline transition-all duration-300"
                  style={{
                    fontWeight: link.fontWeight,
                    fontSize: link.fontSize,
                  }}
                >
                  {link.label}
                </a>
              </>
            ))}
            {props?.icon && (
              <a href={props?.links[0].url} class="bg-[#feb13f] hover:opacity-[.7] rounded-full lg:w-[28px] w-[20px] lg:h-[28px] h-[20px] flex justify-center items-center">
                <Image
                  src={props.icon}
                  width={9}
                  height={16}
                  alt="arrow-icon"
                />
              </a>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
