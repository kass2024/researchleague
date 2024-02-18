"use client";

import Image from "next/image";
import logo from "@/assets/images/logo (1).png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tab } from "@/utils/types";
import { tabs } from "@/constants";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const activeRoute = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full md:h-[16vh] flex flex-col md:flex-row items-center justify-between md:px-16 px-2 py-8 md:py-0">
      <Image src={logo} alt="logo" className="my-4 mx-3 md:mx-0 md:my-0" />
      <div className="w-full md:w-[60%] h-full hidden min-[600px]:flex items-center justify-between">
        {tabs.map((tab, i) => {
          return (
            <Link
              key={i}
              href={tab.path}
              className={`h-full flex items-center hover:border-t-2 hover:border-t-[#E34530] hover:text-[#E34530] ${
                activeRoute == tab.path
                  ? "border-t-2 border-t-[#E34530] text-[#E34530]"
                  : ""
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      <div className="hidden max-[600px]:flex flex-col items-center w-screen px-3">
        <div className="w-full border border-[#ccc] flex flex-col pl-3 justify-between mx-3 relative py-3">
          <h4>Go to ...</h4>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="absolute top-2 right-3"
          >
            <IoMdMenu size={25} />
          </span>
        </div>
        {showMenu && (
          <div className="w-full flex flex-col">
            {tabs.map((tab, i) => {
              return (
                <Link
                  key={i}
                  href={tab.path}
                  className={`py-3 border border-[#ccc] pl-3 flex items-center hover:border-t-2 hover:border-t-[#E34530] hover:text-[#E34530] ${
                    activeRoute == tab.path
                      ? "border-t-2 border-t-[#E34530] text-[#E34530]"
                      : ""
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
