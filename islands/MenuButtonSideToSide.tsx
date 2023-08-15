import { useEffect, useState } from "preact/compat";
import Image from "deco-sites/std/components/Image.tsx";

import { headerProps } from "../sections/Header.tsx";

export default function MenuButtonSideToSide(props: headerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { linkList, image } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    const body = document.querySelector("body") as HTMLElement;
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="absolute top-0 right-0 z-50 flex items-center justify-center w-12 h-12 text-gray-500 transition duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-outline hover:text-gray-900"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          {isOpen
            ? (
              <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              >
              </path>
            )
            : (
              <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              >
              </path>
            )}
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center w-full h-full bg-white transition duration-700 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-[-100vw]"
        }`}
      >
        <div
          className="absolute top-0 right-0 z-50 flex items-center justify-center w-12 h-12 text-gray-500 transition duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-outline hover:text-gray-900"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
        </div>
        <div className={`w-full h-full`}>
          {isOpen
            ? (
              <div className={`w-full h-full`}>
                <div className={`w-[40%] p-[35px] h-full flex flex-col`}>
                  <Image
                    src={image || ""}
                    width={80}
                    height={34}
                    alt={""}
                  />
                  <div className={`w-full border-b-1 my-[60px]`}></div>
                  {linkList?.map((link, index) => {
                    return (
                      <div
                        key={index}
                        className={`text-[#002fa7] mb-[35px] text-[18px]`}
                      >
                        <a href={link?.link}>{link?.title}</a>
                      </div>
                    );
                  })}
                  <div className={`h-full flex flex-col justify-end`}>
                    <div className={`flex flex-row`}>
                      <a href="">linkdin</a>
                      <a href="">linkdin</a>
                    </div>
                  </div>
                  <div
                    className={`absolute top-[50vh] left-auto bottom-auto right-[60%] bg-[#feb13f] rounded-full w-[40px] h-[40px] flex justify-center items-center`}
                  >
                    <svg width="28" height="16" className={``}>
                      <use href="/sprites.svg#arrow-left"></use>
                    </svg>
                  </div>
                </div>
                <div className={`w-[60%]`}>
                </div>
              </div>
            )
            : () => {
              return null;
            }}
        </div>
      </div>
    </div>
  );
}
