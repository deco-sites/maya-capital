import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface OurTeamProps {
  id?: string;
  title?: string;
  members?: Member[];
}

export interface Member {
  image: LiveImage;
  label: string;
  title: string;
  socialMedia?: Link[];
}

export interface Link {
  image: LiveImage;
  url: string;
}

export default function OurTeam(props: OurTeamProps) {
  return (
    <div
      class="py-[120px] lg:px-[100px] sm:px-[50px] bg-[#f9fafc] sm:mx-[14px] my-[28px] p-[14px]"
      id={props.id}
    >
      <div class="mx-auto">
        <h2 class="text-[#002fa7] lg:text-[40px] md:text-[30px] text-[24px] sm:my-[10px] mb-[26px] leading-[1.1em] font-semibold">
          {props.title}
        </h2>
        <div class="mt-[30px] flex flex-row items-start flex-wrap">
          {props?.members?.map((member) => (
            <div class="flex flex-col flex-1 w-full opacity-[.93] outline-offset-0 border border-[rgba(67, 67, 67, .05)] rounded-[9px] outline-3 mb-[40px] sm:mr-[30px] mr-0 py-[30px] pl-[30px] pr-[179px]">
              <Image
                src={member.image}
                width={99.64}
                height={99.64}
                class="box-shadow-1"
                alt={member.label}
              />
              <div class="flex flex-col">
                <h5 class="font-bold text-[#002fa7] text-[32px] leading-[1em] mt-[17px] mb-[10px]">
                  {member.label}
                </h5>
                <p class="font-light text-[12px] leading-[1.1em] tracking-[.2em] m-0 -mr-[169px] mb-[20px]">
                  {member.title}
                </p>
                <div class="flex flex-wrap">
                  {member?.socialMedia
                    ? (
                      member.socialMedia.map((social) => (
                        <a
                          href={social.url}
                          target="_blank"
                          key={social.url}
                        >
                          <Image
                            src={social.image}
                            width={20}
                            height={20}
                            alt="social media icon"
                          />
                        </a>
                      ))
                    )
                    : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
