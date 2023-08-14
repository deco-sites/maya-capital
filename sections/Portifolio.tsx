export interface Props {
  subTitle?: string;
  title?: string;
}

export default function Portifolio(props: Props) {
  const { subTitle, title } = props;

  return (
    <section
      className={`py-[120px] px-[20px] background-[#f9fafc]`}
    >
      <p
        className={`font-["Posteramatext"] text-[#002fa7] text-[10px] uppercase tracking-[4px]`}
      >
        {subTitle}
      </p>

      <div className={`flex flex-row items-baseline`}>
        <p
          className={` font-["Posteramatext"] font-semibold text-[#002fa7] text-[36px] `}
        >
          {title}
        </p>
        <p class={`text-[#feb13f] text-[36px] font-["arial"] font-bold`}>.</p>
      </div>
    </section>
  );
}
