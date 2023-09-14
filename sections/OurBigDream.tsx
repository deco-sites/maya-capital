import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface OurBigDreamProps {
  id?: string;
  title: HTML;
  Text: HTML;
}

export default function OurBigDream(props: OurBigDreamProps) {
  return (
    <div class="p-[14px] min-h-[60vh] bg-[#f9fafc]" id={props.id}>
      <div class="max-w-[680px] mx-auto w-full py-[120px] lg:px-0 px-[50px] relative lg:-left-[50px]">
        {props.title && (
          <HTMLRenderer
            html={props.title}
            class="lg:text-[40px] text-[30px] font-semibold"
          />
        )}
        {props.Text && (
          <HTMLRenderer
            html={props.Text}
            class="lg:text-[25px] text-[20px] font-light"
          />
        )}
      </div>
    </div>
  );
}
