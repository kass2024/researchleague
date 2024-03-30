"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full flex flex-col pb-12 md:h-[90vh] bg-[#141414] relative">
      <div className="w-full grid md:grid-cols-4 gap-x-4 text-[#ccc] md:px-10 px-3">
        <div className="w-full">
          <h1 className="text-[1.2rem] font-bold text-[#E472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
            About Research League{" "}
            <span className="border-y-2 border-y-[#ccc] w-[5rem] absolute left-0 bottom-[-2px]"></span>
          </h1>
          <p>
            Research league is related to an expert who concerned within the
            field, on this Research league there are professional participants
            like Professor, Head of departments, scientist, researcher, doctors,
            industrialist, manager, engineers, principals, Students and so
            forth.
          </p>
        </div>

        <div className="w-full">
          <h1 className="text-[1.2rem] font-bold text-[E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
            Get In Touch{" "}
            <span className="border-y-2 border-y-[#ccc] w-[5rem] absolute left-0 bottom-[-2px]"></span>
          </h1>
          <div className="w-full flex gap-5">
            <span className="w-[2.4rem] h-[2.4rem] flex items-center justify-center rounded-lg bg-[#302f2fc9]">
              <MdEmail color="#ccc" />
            </span>
            <h5>
              Email account: <br /> team@research-leagues.com
            </h5>
          </div>
          <div className="w-full flex gap-5 mt-3">
            <span className="w-[2.4rem] h-[2.4rem] flex items-center justify-center rounded-lg bg-[#302f2fc9]">
              <MdEmail color="#ccc" />
            </span>
            <h5>
              Contact No: <br /> +1 (438) 51900266
            </h5>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <h1 className="text-[1.2rem] font-bold text-[E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
            Quick Links{" "}
            <span className="border-y-2 border-y-[#ccc] w-[5rem] absolute left-0 bottom-[-2px]"></span>
          </h1>
          <Link href={"/calendar"}>Calender</Link>
          <Link href={"/committee"}>Committee</Link>
          <Link href={"/conferences"}>Upcoming Conferences</Link>
          <Link href={"/publications"}>Publication</Link>
          <Link href={"/associates"}>Associates</Link>
        </div>

        <div className="w-full flex flex-col gap-4 px-3">
          <h1 className="text-[1.2rem] font-bold text-[E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
            Subscribe for Latest News & Update{" "}
            <span className="border-y-2 border-y-[#ccc] w-[5rem] absolute left-0 bottom-[-2px]"></span>
          </h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="bg-transparent px-3 border-[1px] border-[#FFF] w-full py-3"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-transparent px-3 border-[1px] border-[#FFF] w-full py-3"
          />
          <div className="w-full flex gap-5 items-center justify-center">
            <select
              name="country"
              id="country"
              className="bg-transparent px-3 border-[1px] border-[#FFF] w-[48%] py-2"
            >
              <option value="#">Select Country Code</option>
            </select>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Mobile Number"
              className="bg-transparent px-3 border-[1px] border-[#FFF] w-[48%] py-2"
            />
          </div>
          <select
            name="interest"
            id="interest"
            className="bg-transparent px-3 border-[1px] border-[#FFF] w-[48%] py-2"
          >
            <option value="#">-- Interested In --</option>
          </select>
          <input
            type="text"
            name="research"
            id="research"
            placeholder="Research Field"
            className="bg-transparent px-3 border-[1px] border-[#FFF] w-full py-3"
          />
          <div className="w-full flex items-center mt-6 ">
            <button type="button" className="py-2 px-6 bg-[#CCC] text-black">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100vw] bg-[#111111] flex items-center justify-start px-10 absolute bottom-0 py-8">
        <h5 className="text-white">
          Copyright © 2023 Research League |{" "}
          <Link href={"/condition"} className="text-[#E34530]">
            Our Terms & Conditions
          </Link>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
