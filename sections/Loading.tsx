import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  preloader: LiveImage;
  alt?: string;
}

export default function Loading(props: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      addEventListener("load", handleLoad);
    }

    return () => {
      removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <section class="bg-white w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center z-50 overflow-hidden">
        <figure class="-top-[50px] relative">
          <Image
            src={props.preloader || ""}
            class="w-[122px] h-full"
            width={122}
            height={69}
            alt={props.alt}
          />
        </figure>
        <span class="loading-line w-[100px] h-[4px] bg-[#FEB13F] relative">
        </span>
      </section>
    );
  }

  return null;
}
