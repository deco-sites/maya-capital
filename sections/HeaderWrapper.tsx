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
  color?: string;
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
  };

  return (
    <div>
      <span style={background}></span>
      <div class="flex flex-col lg:max-w-[1050px] md:max-w-[770px] sm:max-w-[500px] max-w-[370px] mx-auto w-full bg-white lg:px-[100px] lg:pt-[100px] md:px-[60px] sm:pt-[60px] sm:px-[40px] p-[35px] relative z-10 bottom-[20vh]">
        <p class="text-[#002fa7] lg:text-[16px] text-[10px] font-light">
          {props.subTitle}
        </p>
        <HTMLRenderer
          html={props.title}
          class="lg:text-[80px] md:text-[50px] text-[36px] font-semibold lg:ml-0 md:ml-0 -ml-[5px] leading-[1.1em]"
        />
        {props.links && (
          <nav class="flex items-center mt-[60px] py-[10px]">
            {props.links.map((link) => (
              <>
                <a
                  href={link.url}
                  class="mr-[40px]"
                  style={{
                    color: link.color,
                    fontWeight: link.fontWeight,
                    fontSize: link.fontSize,
                  }}
                >
                  {link.label}
                </a>
              </>
            ))}
            {props.icon && (
              <span class="bg-[#feb13f] rounded-full lg:w-[28px] w-[20px] lg:h-[28px] h-[20px] flex justify-center items-center">
                <Image
                  src={props.icon}
                  width={9}
                  height={16}
                  alt="arrow-icon"
                />
              </span>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
