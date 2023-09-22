import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { useRef, useState } from "preact/hooks";

export interface SliderProps {
  id?: string;
  slider?: Slide[];
  iconButtonRight?: LiveImage;
  iconButtonLeft?: LiveImage;
}

export interface Slide {
  image: LiveImage;
  subtitle?: string;
  title: HTML;
  /** @format textarea */
  description?: string;
  links?: Link;
}

export interface Link {
  label: string;
  url: string;
  icon: LiveImage;
}

export default function Slider(props: SliderProps) {
  const { id, slider, iconButtonRight, iconButtonLeft } = props;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [state, setState] = useState({
    currentSlide: 0,
    touchStartX: 0,
    touchEndX: 0,
    isDragging: false,
  });

  const handleTouchStart = (e: TouchEvent) => {
    setState((prevState) => ({
      ...prevState,
      touchStartX: e.touches[0].clientX,
      isDragging: true,
    }));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!state.isDragging) return;
    setState((prevState) => ({
      ...prevState,
      touchEndX: e.touches[0].clientX,
    }));
  };

  const handleTouchEnd = () => {
    if (!state.isDragging) return;
    const deltaX = state.touchStartX - state.touchEndX;
    const sensitivity = 30;

    if (
      deltaX > sensitivity &&
      state.currentSlide < sliderRef.current!.children.length - 1
    ) {
      setState((prevState) => ({
        ...prevState,
        currentSlide: prevState.currentSlide + 1,
      }));
    } else if (deltaX < -sensitivity && state.currentSlide > 0) {
      setState((prevState) => ({
        ...prevState,
        currentSlide: prevState.currentSlide - 1,
      }));
    }

    setState((prevState) => ({
      ...prevState,
      touchStartX: 0,
      touchEndX: 0,
      isDragging: false,
    }));
  };

  const dots = slider?.map((_, index) => (
    <button
      key={index}
      class={`w-[11.99px] h-[11.99px] rounded-full ${
        state.currentSlide === index ? "bg-[#FEB13F]" : "bg-[#99B1EE]"
      }`}
      onClick={() => setState({ ...state, currentSlide: index })}
    />
  ));

  const prevSlide = () => {
    if (slider) {
      setState((prevState) =>
        prevState.currentSlide === 0
          ? { ...state, currentSlide: slider.length - 1 }
          : { ...state, currentSlide: prevState.currentSlide - 1 }
      );
    }
  };

  const nextSlide = () => {
    if (slider) {
      setState((prevState) => ({
        ...state,
        currentSlide: (prevState.currentSlide + 1) % (slider.length || 1),
      }));
    }
  };

  return (
    <div
      class="relative overflow-hidden"
      id={id}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        class="w-full flex overflow-hidden"
        style={slider && slider.length > 0
          ? {
            transform: `translateX(-${
              state.currentSlide * (100 / slider.length)
            }%)`,
            transition: "transform 0.5s ease-in-out",
            display: "flex",
            width: `${slider.length * 100}%`,
          }
          : undefined}
      >
        {slider?.map((slide, index) => (
          <div
            class={`w-full `}
            key={index}
            style={{
              width: `${100 / slider.length}%`,
              flex: "0 0 auto",
              position: "relative",
            }}
          >
            <div>
              <span
                class={`absolute w-full h-full lg:flex hidden z-0 ${
                  state.currentSlide === index ? "upBackground" : ""
                }`}
              >
              </span>
              <span class="bg-[#002fa7bf] absolute w-full h-full lg:flex hidden -z-[1]">
              </span>
              <Image
                src={slide.image}
                alt={slide.title}
                width={432}
                height={632}
                class="h-screen w-[30%] lg:block hidden relative -z-[2]"
              />
            </div>
            <div class="lg:absolute top-0 right-0 lg:w-[calc(100%-30%)] w-full h-screen flex items-center bg-[#f9fafc]">
              <div class="text-white md:pl-[90px] md:pr-0 sm:px-[50px] px-[35px] max-w-[650px] h-full flex justify-center flex-col">
                <p
                  class={`text-[#434343] text-[14px] tracking-[6px] font-light ${
                    state.currentSlide === index ? "transformCarouselText" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {slide.subtitle}
                </p>
                <div
                  class={`${
                    state.currentSlide === index ? "transformCarouselText" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <HTMLRenderer
                    html={slide.title}
                    class="leading-[1.1em] mt-[20px] mb-[30px] lg:text-[50px] md:text-[38px] text-[30px]"
                  />
                </div>
                <p
                  class={`text-[#434343] text-[16px] font-light ${
                    state.currentSlide === index ? "transformCarouselText" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {slide.description}
                </p>
                {slide.links && (
                  <div class="flex flex-wrap items-center mt-[40px] py-[10px] transformCarouselText">
                    <a
                      key={slide.links.url}
                      href={slide.links.url}
                      class="text-[#434343] sm:text-[16px] text-[12px] sm:mr-[20px] mr-[15px] font-semibold tracking-[2px]"
                    >
                      {slide.links.label}
                    </a>
                    <a
                      href={slide.links.url}
                      class="bg-[#feb13f] hover:opacity-[.7] rounded-full lg:w-[28px] w-[20px] lg:h-[28px] h-[20px] flex justify-center items-center"
                    >
                      <Image
                        src={slide.links.icon}
                        width={28}
                        height={16}
                        alt="arrow-icon"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="lg:flex lg:justify-between hidden absolute w-full top-[50%] px-[26px]">
        <button
          class="bg-[#feb13f] w-[28px] h-[28px] rounded-[50%] flex items-center justify-center"
          onClick={prevSlide}
          aria-label={`Previous slide (${
            state.currentSlide === 0 ? slider?.length : state.currentSlide
          }/${slider?.length})`}
        >
          <Image
            src={iconButtonLeft || ""}
            width={28}
            height={16}
            class="h-[16px]"
          />
        </button>
        <button
          class="bg-[#feb13f] w-[28px] h-[28px] rounded-[50%] flex items-center justify-center"
          onClick={nextSlide}
          aria-label={`Next slide (${
            state.currentSlide === 0 ? slider?.length : state.currentSlide
          }/${slider?.length})`}
        >
          <Image
            src={iconButtonRight || ""}
            width={28}
            height={16}
            class="h-[16px]"
          />
        </button>
      </div>
      <div class="flex gap-x-[40px] absolute bottom-[60px] lg:left-[30%] md:pl-[90px] sm:pl-[35px] pl-[calc(100%-65%)]">
        {dots}
      </div>
    </div>
  );
}
