import { useEffect, useState } from "preact/compat";
import Image from "deco-sites/std/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

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
        className=" z-50 flex items-center justify-center w-12 h-12 text-gray-500 transition duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-outline hover:text-gray-900"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="46"
          height="17"
          className="fill-current xl:w-[46px] w-[32px]"
        >
          <use href="/sprites.svg#menu"></use>
        </svg>
      </button>
      <div>
        <div
          className={`xl:flex-col w-full fixed inset-0 z-40 flex flex-row justify-center h-full bg-transparent transition duration-700 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-[-100vw]"
          }`}
        >
          <div
            className="absolute top-0 right-0 z-50 flex items-center justify-center w-12 h-12 text-gray-500 transition duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-outline hover:text-gray-900"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
          </div>
          <div className={`xl:w-full h-full bg-white w-[70%]`}>
            {isOpen
              ? (
                <div className={`w-full h-full flex`}>
                  <div
                    className={`w-full xl:w-[39%] xl:p-[35px] px-[24px] py-[35px] h-full flex flex-col`}
                  >
                    <Image
                      src={image || ""}
                      width={80}
                      height={34}
                      alt={""}
                    />
                    <div className={`w-full border-b-1 xl:my-[60px] my-[30px]`}>
                    </div>
                    {linkList?.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className={`text-[#002fa7] mb-[12px] py-[6px] xl:mb-[35px] text-[18px]`}
                        >
                          <a href={link?.link}>{link?.title}</a>
                        </div>
                      );
                    })}
                    <div
                      className={`flex flex-row w-fit gap-[20px] absolute top-auto bottom-0 left-0 right-0 mx-[35px] mb-[35px]`}
                    >
                      <a
                        href="https://www.linkedin.com/company/mayacapital/"
                        target="_blank"
                        className={``}
                      >
                        <img
                          src="/linkedin.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/mayacapital"
                        target="_blank"
                      >
                        <svg width={20} height={20}>
                          <use href="/sprites.svg#m-icon"></use>
                        </svg>
                      </a>
                    </div>
                    <div
                      className={`absolute top-[50vh] left-auto z-10 bottom-auto xl:right-[60%] right-[24%] bg-[#feb13f] rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <svg width="28" height="16" className={``}>
                        <use href="/sprites.svg#arrow-left"></use>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`hidden xl:flex w-[62%] xl:opacity-100 justify-center items-center bg-no-repeat bg-cover bg-center h-full`}
                    onClick={() => setIsOpen(!isOpen)}
                    style={`
                  background-image: linear-gradient(rgba(0, 47, 167, .92), rgba(0, 47, 167, .92)), url(/bg-blue.jpg);
                  background-position: 0 0, 0 0;
                  background-size: auto, cover;
                `}
                  >
                    <svg
                      width="100"
                      height="42"
                      className={`fill-white xl:block hidden`}
                    >
                      <use href="/sprites.svg#maya-white"></use>
                    </svg>
                  </div>
                </div>
              )
              : () => {
                return null;
              }}
          </div>
          <div
            className={`xl:hidden h-full bg-white w-[30%] opacity-50`}
            onClick={() => setIsOpen(!isOpen)}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
