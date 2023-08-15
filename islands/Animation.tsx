import { useEffect, useRef, useState } from "preact/compat";
import Image from "deco-sites/std/components/Image.tsx";

export default function Animation() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [fadeInIndex, setFadeInIndex] = useState(0);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);



  useEffect(() => {
    const interval = setInterval(() => {
      setFadeInIndex((prevIndex) => {
        if (prevIndex < 8) {
          return prevIndex + 1;
        }
        clearInterval(interval);
        return prevIndex;
      });
    }, 1000); // Tempo entre cada elemento aparecer (milissegundos)

    return () => {
      clearInterval(interval);
    };
  }, [hasEnteredViewport]);

  const handleScroll = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      ) {
        console.log("Div is in the viewport!");
        setHasEnteredViewport(true);
      }
    }
  };

  useEffect(() => {
    // deno-lint-ignore no-window-prefix
    window.addEventListener("scroll", handleScroll);

    return () => {
      // deno-lint-ignore no-window-prefix
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={divRef} className={`grid grid-cols-3 gap-[15px] px-[25px]`}>
      <div
        id="animation"
        className={`flex opacity-0 justify-center mt-[30px] lg:mt-[5px] ${
          fadeInIndex >= 0 ? "fade-in" : ""
        }`}
      >
        <Image
          className={`lg:w-[130px]`}
          src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f21aed36bc626e098a_turn-right-arrow-with-broken-line-1.svg`}
          width={50}
        />
      </div>
      <div
        id="animation"
        className={`flex opacity-0 justify-center ${
          fadeInIndex >= 1 ? "fade-in" : ""
        }`}
      >
        <p
          className={`text-center text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
        >
          Invest in exceptional teams
        </p>
      </div>
      <div
        id="animation"
        className={`flex opacity-0 justify-center mt-[30px] lg:mt-[5px] ${
          fadeInIndex >= 2 ? "fade-in" : ""
        }`}
      >
        <Image
          className={`lg:w-[130px]`}
          src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f11aed36be986e0987_turn-right-arrow-with-broken-line.svg`}
          width={50}
        />
      </div>

      <div
        id="animation"
        className={`flex opacity-0 justify-center lg:justify-left ${
          fadeInIndex >= 7 ? "fade-in" : ""
        }`}
      >
        <p
          className={`text-left text-[14px] ml-[-20px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px] lg:ml-[-100px]`}
        >
          Inspire future generations
        </p>
      </div>
      <div
        id="animation"
        className={`flex opacity-0 justify-center ${
          fadeInIndex >= 8 ? "fade-in" : ""
        }`}
      >
        <Image
          className={`lg:w-[160px]`}
          src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9c09ff8e0125dc4e2977e_Maya%20Blue.svg`}
          width={115}
        />
      </div>
      <div
        id="animation"
        className={`flex opacity-0 justify-center lg:justify-right ${
          fadeInIndex >= 3 ? "fade-in" : ""
        }`}
      >
        <p
          className={`text-right text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
        >
          Empower founders
        </p>
      </div>

      <div
        id="animation"
        className={`flex opacity-0 justify-center align-baseline ${
          fadeInIndex >= 6 ? "fade-in" : ""
        }`}
      >
        <Image
          className={`lg:w-[130px]`}
          src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f1f8e01294dae2d4b6_Group%207.svg`}
          width={50}
        />
      </div>
      <div
        id="animation"
        className={`flex opacity-0 justify-center mt-[40px] lg:items-end ${
          fadeInIndex >= 5 ? "fade-in" : ""
        }`}
      >
        <p
          className={`text-center text-[14px] font-light font-["Posteramatext"] text-[#333] lg:text-[30px]`}
        >
          Support business growth
        </p>
      </div>
      <div
        id="animation"
        className={`flex opacity-0 justify-center align-baseline ${
          fadeInIndex >= 4 ? "fade-in" : ""
        }`}
      >
        <Image
          className={`lg:w-[130px]`}
          src={`https://uploads-ssl.webflow.com/5ca9b45ad636b789185d2595/5ca9d9f11aed36e7346e0989_Group%205.svg`}
          width={50}
        />
      </div>
    </div>
  );
}
