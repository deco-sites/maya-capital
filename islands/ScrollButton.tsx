import Image from "deco-sites/std/components/Image.tsx";

export default function ScrollButton() {
  const scrollTo = () => {
    const divToScroll = document.querySelector("#scrollHere") as HTMLElement;
    divToScroll.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="scroll-button flex flex-row items-center uppercase mt-[90px] tracking-[2px] font-bold xl:text-[16px] text-[14px]"
      onClick={scrollTo}
    >
      Discover more{" "}
      <div
        className={`ml-[20px] flex align-center justify-center bg-[#feb13f] rounded-full p-[4px] xl:p-[7px]`}
      >
        <svg width={18} height={16} className={`rotate-[270deg] fill-white`}>
          <use href="/sprites.svg#arrow-custom"></use>
        </svg>
      </div>
    </div>
  );
}
