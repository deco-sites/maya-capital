import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import MenuButtonSideToSide from "../islands/MenuButtonSideToSide.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface headerProps {
    image?: LiveImage;
    linkList?: {
        title?: string;
        link?: string;
    }[];
}

export default function Header(props:headerProps) {
    return (
        <div className={``}>
            <div className={``}>
                <Image 
                    src={props?.image || ""}
                    width={80}
                    height={34}
                    className={``}
                />
            </div>
            <div className={``}>
                <MenuButtonSideToSide linkList={props?.linkList} image={props?.image}/>
            </div>
        </div>
    );
}