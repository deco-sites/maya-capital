import ScrollButton from "../islands/ScrollButton.tsx";

export interface Props {
  title: string;
  description: string;
}

export default function DreamBigger({ title, description }: Props) {
  return (
    <div
      className={`xl:px-[110px] pb-[140px] px-[20px] py-[80px] lg:pb-[220px] lg:py-[150px]  bg-[#F9FAFC] lg:mb-[30px]`}
    >
      <h1
        className={`text-[#002fa7] ml-[-2px] mb-[5px] mt-[10px] xl:mb-[0px] font-bold xl:text-[80px] text-[36px]`}
        dangerouslySetInnerHTML={{
          __html: `
                ${title}
            `,
        }}
      >
      </h1>
      <div
        className={`max-w-[380px] text-[#333] xl:max-w-[440px] xl:text-[16px] text-[14px] font-light mb-[10px]`}
      >
        <p>{description}</p>
      </div>
      <div className={`lg:mt-[95px]`}>
        <ScrollButton />
      </div>
    </div>
  );
}
