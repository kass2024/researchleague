import Link from "next/link";
import { FC } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface Props {
  header: string;
  description: string;
  location: string;
  className?: string;
}

const PageBanner: FC<Props> = ({
  header,
  description,
  location,
  className,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-20 bg-[#F8F7F7] py-3 border-t-[1px] border-t-[#ccc]">
      <div className="flex flex-col gap-[2rem] items-start">
        <h3 className={`${className} text-[1.6rem] text-[#E34530]`}>
          {header}
        </h3>
        <h5 className="font-light">{description}</h5>
      </div>

      <h5 className="flex mt-3 md:mt-0 justify-end items-center gap-2">
        You are here:{" "}
        <Link href={"/"} className="text-[#ccc]">
          Home
        </Link>{" "}
        <MdKeyboardDoubleArrowRight />{" "}
        <h5 className="text-[#D3D3D3]">{location}</h5>{" "}
      </h5>
    </div>
  );
};

export default PageBanner;
