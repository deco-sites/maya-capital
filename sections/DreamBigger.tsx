import ScrollButton from "../islands/ScrollButton.tsx";

export interface Props {
  title: string;
  description: string;
}

export default function DreamBigger({ title, description }: Props) {
  return (
    <div
      className={`xl:px-[100px] px-[15px] xl:py-[80px] py-[120px] bg-[#F9FAFC] lg:mb-[30px]`}
    >
      <h1
        className={`text-[#002fa7] mt-[10px] xl:mb-[20px] font-bold xl:text-[80px] text-[36px]`}
        dangerouslySetInnerHTML={{
          __html: `
                ${title}
            `,
        }}
      >
      </h1>
      <div
        className={`max-w-[380px] xl:max-w-[440px] xl:text-[16px] text-[14px] font-light mb-[10px]`}
      >
        <p>{description}</p>
      </div>
      <div className={``}>
        <ScrollButton />
      </div>
    </div>
  );
}
