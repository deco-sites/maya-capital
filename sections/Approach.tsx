import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  subTitle?: string;
  title?: string;
  description?: string;
}

export default function Approach(props: Props) {
  const { subTitle, title, description } = props;

  return (
    <section
      className={`flex justify-center flex-col items-center px-[20px] py-[40px] bg-[#f9fafc] lg:py-[120px]`}
    >
      <p
        className={`font-["Posteramatext"] text-[#002fa7] text-[10px] font-light uppercase tracking-[4px] lg:text-[16px] lg:tracking-[6px]`}
      >
        {subTitle}
      </p>
      <div className={`flex mb-[5px]`}>
        <p
          className={`font-["Posteramatext"] font-semibold text-[#002fa7] text-[36px] lg:text-[80px]`}
        >
          {title}
        </p>
        <p
          class={`text-[#feb13f] text-[36px] font-["arial"] font-bold lg:text-[80px]`}
        >
          .
        </p>
      </div>
      <p
        className={`text-center text-[#333] text-[14px] font-["Posteramatext"] mb-[45px] lg:max-w-[60ch]`}
      >
        {description}
      </p>

      <div className={`grid grid-cols-3 gap-[15px] p-[15px]`}>
        <div className={`flex justify-center mt-[30px] `}>
          <Image
            className={`lg:w-[130px]`}
            src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f21aed36bc626e098a_turn-right-arrow-with-broken-line-1.svg`}
            width={50}
          />
        </div>
        <div className={`flex justify-center`}>
          <p
            className={`text-center text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
          >
            Invest in exeptional teams
          </p>
        </div>
        <div className={`flex justify-center mt-[30px]`}>
          <Image
            className={`lg:w-[130px]`}
            src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f11aed36be986e0987_turn-right-arrow-with-broken-line.svg`}
            width={50}
          />
        </div>

        <div className={`flex justify-center`}>
          <p
            className={`text-left text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
          >
            Inspire future generations
          </p>
        </div>
        <div className={`flex justify-center`}>
          <Image
            className={`lg:w-[130px]`}
            src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9c09ff8e0125dc4e2977e_Maya%20Blue.svg`}
            width={115}
          />
        </div>
        <div className={`flex justify-center`}>
          <p
            className={`text-right text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
          >
            Empower founders
          </p>
        </div>

        <div className={`flex justify-center align-baseline`}>
          <Image
            className={`lg:w-[130px]`}
            src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f1f8e01294dae2d4b6_Group%207.svg`}
            width={50}
          />
        </div>
        <div className={`flex justify-center mt-[40px] lg:items-end`}>
          <p
            className={`text-center text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
          >
            Support business growth
          </p>
        </div>
        <div className={`flex justify-center align-baseline`}>
          <Image
            className={`lg:w-[130px]`}
            src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f11aed36e7346e0989_Group%205.svg`}
            width={50}
          />
        </div>
      </div>
    </section>
  );
}
