export interface Props {
  title: string;
  description: string;
  link: string;
}

export default function transformative(props: Props) {
  return (
    <div
      id="scrollHere"
      className={`flex flex-row min-h-[60vh] justify-right lg:mb-[30px]`}
    >
      <div
        className={`hidden xl:block w-[50%] px-[100px] pt-[15vw] bg-[#f9fafc] lg:w-[30%]`}
      >
      </div>
      <div
        className={`max-w-[1050px] m-[5px] lg:m-[0] lg:max-w-[1323px] lg:w-[70%]`}
        style={`
            background-image: linear-gradient(rgba(0, 47, 167, .82), rgba(0, 47, 167, .82)), url(/bg-blue.jpg);
            background-size: auto, cover;
            `}
      >
        <div className={`xl:px-[95px] py-[140px] px-[15px]`}>
          <h3
            className={`text-[#feb13f] font-bold xl:text-[80px] text-[35px] mb-[20px] mt-[10px] max-w-[860px] leading-[1.1em]`}
          >
            {props.title}
          </h3>
          <p
            className={`max-w-[440px] text-[14px] xl:text-[16px] text-white font-light`}
          >
            {props.description}
          </p>
          <a
            className={`flex flex-row w-fit xl:mt-[60px] mt-[40px] text-[12px] lg:text-[14px] xl:text-[16px] items-center uppercase tracking-[2px] text-white font-bold`}
            href={props.link}
          >
            discover maya capital
            <div
              className={`ml-[20px] flex align-center justify-center bg-[#feb13f] rounded-full p-[4px] xl:p-[7px]`}
            >
              <svg width={18} height={16} className={`rotate-[180deg]`}>
                <use href="/sprites.svg#arrow-custom"></use>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
