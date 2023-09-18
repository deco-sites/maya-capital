import { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface ContactUsProps {
  src?: LiveImage;
  title?: string;
  /** @format textarea */
  description?: string;
  /** @format textarea */
  /** @description link email*/
  mailto?: string;
  email?: string;
  buttonText?: string;
  /** @format textarea */
  linkButton?: string;
}

export default function ContactUs(props: ContactUsProps) {
  const background = {
    backgroundImage: `url(${props.src})`,
    backgroundPosition: "50% 18%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    minHeight: "90vh",
    position: "relative",
    display: "flex",
    zIndex: -1,
  };
  return (
    <div>
      <div class="relative z-0 my-auto">
        <span style={background}></span>
        <div class="flex flex-col bg-white py-[90px] sm:pl-[90px] sm:pr-[24vw] px-[30px] transformSlideText absolute md:top-[13%] top-0 md:my-0 my-[40px] sm:max-w-none max-w-[90%]">
          <h2 class="text-[#002fa7] lg:text-[16px] text-[10px] font-semibold tracking-[6px] transformSlideText">
            {props.title}
          </h2>
          <sub class="text-[#002fa7] text-[16px] font-light tracking-[3px] mt-[10px] mb-[20px] leading-normal">
            {props.description}
          </sub>
          <a
            href={`${props.mailto}`}
            class="mb-[10px] text-[#434343] sm:text-[16px] text-[14px] font-light"
          >
            {props.email}
          </a>
          <a
            href={props.linkButton}
            class="bg-[#feb13f] sm:text-[16px] text-[12px] text-white mt-[40px] tracking-[2px] py-[10px] px-[15px] font-semibold w-fit"
          >
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
