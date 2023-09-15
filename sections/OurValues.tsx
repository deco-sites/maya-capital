import { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface OurValuesProps {
  id?: string;
  title?: string;
  subTitle?: string;
  ourValues?: OurValues[];
  background?: LiveImage;
}

export interface OurValues {
  label?: string;
  /** @format textarea */
  description?: string;
}

export default function OurValues(props: OurValuesProps) {
  const background = {
    backgroundImage:
      `linear-gradient(rgba(0, 47, 167, .82), rgba(0, 47, 167, .82)), url(${props.background})`,
    backgroundPosition: "0 0, 0 0",
    backgroundSize: "auto, cover",
    display: "flex",
  };
  return (
    <div
      class="flex lg:flex-row flex-col bg-[#f9fafc] sm:m-[14px] m-[5px]"
      id={props.id}
    >
      <div class="lg:pt-[70px] pt-[80px] lg:px-[100px] px-[50px] pb-[50px]">
        <h2 class="text-[#002fa7] my-[10px] text-[40px] font-semibold whitespace-nowrap">
          {props.title}
        </h2>
        <p class="text-[18px] leading-[1.1em] font-light">{props.subTitle}</p>
      </div>
      <div
        class="py-[120px] lg:px-[100px] pl-[35px]"
        style={background}
      >
        <div class="grid lg:grid-cols-2 grid-cols-1 pt-[60px]">
          {props?.ourValues
            ? props.ourValues.map((value) => (
              <div class="flex flex-col mb-[80px] pr-[55px]">
                <h3 className="text-[#feb13f] lg:text-[28px] text-[22px] leading-[1.1em] mb-[20px]">
                  {value.label}
                </h3>
                <p className="lg:text-[16px] text-[14px] text-white mb-[10px] font-light">
                  {value.description}
                </p>
              </div>
            ))
            : null}
        </div>
      </div>
    </div>
  );
}
