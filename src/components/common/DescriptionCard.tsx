import Image, { StaticImageData } from "next/image";
import { Reveal } from "./Reveal";

interface ItemProps {
  imageSrc: StaticImageData;
  title: string;
  content: string;
}

export default function DescriptionCard({
  imageSrc,
  title,
  content,
}: ItemProps) {
  return (
    <div className="lg:w-80 justify-around items-center text-zinc-50 p-1 font-poppins transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imageSrc}
          alt=""
        />
      </div>
      <Reveal>
        <h1 className="text-left lg:text-[28px] py-10 lg:h-[150px]">{title}</h1>
      </Reveal>
      <Reveal>
        <p className="text-left py-1">{content}</p>
      </Reveal>
    </div>
  );
}
