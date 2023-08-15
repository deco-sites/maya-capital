import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface LinkInfo {
  label?: string;
  href?: string;
}

export interface SocialInfo {
  logo?: LiveImage;
  href?: string;
}

export interface Props {
  footerLogo?: LiveImage;
  copyrightText?: string;
  socialInformation?: SocialInfo[];
  links?: LinkInfo[];
}

export default function Footer(props: Props) {
  const { links, footerLogo, copyrightText, socialInformation } = props;

  return (
    <footer
      className={`bg-[#002FA7] px-[14px] py-[45px] text-white px-[25px] lg:flex lg:items-start lg:justify-between lg:py-[45px] lg:px-[100px]`}
    >
      <div
        className={`flex flex-col justify-center items-center gap-[15px] md:flex-row lg:order-2`}
      >
        {links?.map((item) => {
          return (
            <a
              className={`font-["Posteramatext"] font-[14px] font-light`}
              href={item?.href}
            >
              {item?.label}
            </a>
          );
        })}
      </div>

      <div
        className={`flex justify-center my-[26px] gap-[30px] lg:order-3 lg:my-[0px]`}
      >
        {socialInformation?.map((item) => {
          return (
            <a href={item.href}>
              <Image src={item.logo || ``} height={20} width={20} />
            </a>
          );
        })}
      </div>

      <div
        className={`flex justify-between align-baseline lg:order-1 lg:flex-col lg:gap-[40px]`}
      >
        <Image src={footerLogo || ``} width={80} />
        <p
          className={`w-fit h-fit font-["Posteramatext"] text-[14px] font-light`}
        >
          ©{copyrightText}
        </p>
      </div>
    </footer>
  );
}
