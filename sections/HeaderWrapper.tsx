import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface HeaderWrapperProps {
  src: LiveImage;
  subTitle?: string;
  title: HTML;
  /** @description If enableHover in links is set to true, the default text color will be blue.*/
  links?: Links[];
  icon?: LiveImage;
}

export interface Links {
  label?: string;
  url?: string;
  enableHover?: boolean;
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
    <div class="relative -mt-[75.98px]">
      <span style={background}></span>
      <div class="flex flex-col lg:max-w-[1050px] md:max-w-[770px] sm:max-w-[500px] max-w-[370px] mx-auto w-full bg-white lg:p-[100px] md:p-[60px] sm:px-[40px] p-[35px] relative z-0 -mt-[18vh]">
        <p class="text-[#002fa7] lg:text-[16px] text-[10px] font-light tracking-[6px] transform3DText">
          {props.subTitle}
        </p>
        <HTMLRenderer
          html={props.title}
          class="lg:text-[80px] sm:text-[50px] text-[36px] font-semibold -ml-[5px] leading-[1.1em] lg:mt-[10px] lg:mb-[20px] my-[10px] transform3DText"
        />
        {props.links && (
          <nav class="flex items-center mt-[40px] py-[10px] transform3DText">
            {props.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                class={`${
                  link.enableHover
                    ? `text-[#002fa7] text-[14px] hover:text-[#feb13f] hover:underline transition-all duration-300 mr-[40px] font-light`
                    : "text-[#434343] sm:text-[16px] text-[12px] sm:mr-[20px] mr-[15px] font-semibold tracking-[2px]"
                }`}
              >
                {link.label}
              </a>
            ))}
            {props?.icon && (
              <a
                href={props?.links[0].url}
                class="bg-[#feb13f] hover:opacity-[.7] rounded-full lg:w-[28px] w-[20px] lg:h-[28px] h-[20px] flex justify-center items-center"
              >
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
