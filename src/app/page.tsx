import Image from "next/image";
import bgImg from "@/assets/images/banner.jpg";

import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import { books, conferences } from "@/constants";
const Page = () => {
  return (
    <div className="w-full">
      <Image
        src={bgImg}
        alt="Research League"
        className="w-full  object-contain"
      />
      <div className="bg-[#692014] py-3 mx-4 md:mx-20 my-2 toanimate">
        <h4 className="text-white font-bold ">
          All accepted and selected papers will be published in SCOPUS Journals*
          | Proceeding will be Indexed in CNKI, Google Scholar, DRJI, DOAJ,
          CiteseerX *
        </h4>
      </div>

      <div className="w-full flex items-center flex-col px-4 md:px-20 my-16">
        <h1 className="text-[1.6rem] font-bold text-[#E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative">
          Welcome to Research League{" "}
          <span className="border-y-2 border-y-black w-[5rem] absolute left-[40%] bottom-[-2px]"></span>
        </h1>
        <p className="text-[#5c5c5c] text-justify">
          Research league is related to an expert who concerned within the
          field, on this Research league there are professional participants
          like Professor, Head of departments, scientist, researcher, doctors,
          industrialist, manager, engineers, principals, Students and so forth.
          Research leagues have the aim to inspire collaboration among people
          with distinctive backgrounds and views, join experiential specialists
          around the world and construct your professional information and
          competency. This conference emphasizes energetic studying and elevated
          collaboration through interplay and dynamic new event elements. In a
          placing of education and courting building, those elements foster
          know-how sharing and review of the evolving conference.
        </p>
      </div>

      <section className="w-full  lg:h-screen bg-[#F5F4F4] pb-3">
        <div className="w-full flex items-center flex-col px-4 md:px-20 my-16">
          <h1 className="text-[1.6rem] font-bold text-[#E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
            Upcoming Conferences{" "}
            <span className="border-y-2 border-y-black w-[5rem] absolute left-[40%] bottom-[-2px]"></span>
          </h1>
          <p className="text-[#5c5c5c] text-justify">
            Stays abuzz with pioneering conferences in various fields all over
            the year. Events in areas like engineering and technology, physical
            and life sciences, social sciences and humanities, mathematics and
            statistics, health and medicine, and much more had been displayed
            chronologically right here. Click on any conference to reap the
            energetic information about it.
          </p>
        </div>

        <div className="w-full grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10  items-center justify-between lg:h-[50%] px-[5%] mb-6">
          {conferences.slice(0, 3).map((conf, i) => {
            return (
              <div
                key={i}
                className="w-[100%] h-[75%] rounded-lg bg-[#FFF] cursor-pointer shadow-lg"
              >
                <Image
                  alt={conf.location}
                  src={conf.image}
                  className="w-full h-[74%] hover:bg-[#e03e2576]"
                />
                <Link
                  href={"/"}
                  className="w-full h-[26%] justify-start pl-10 flex items-start py-4 gap-4 text-md font-semibold"
                >
                  <span className=" py-3 px-3 flex items-center justify-center bg-[#E03E25] rounded-sm">
                    <FaLeaf size={16} color="white" />
                  </span>
                  {conf.location}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center items-center mt-5">
          <Link
            className="w-[16rem] py-3 border-[1px] flex items-center justify-center border-[#ccc] bg-white text-[#E03E25] font-bold"
            href={"/conferences"}
          >
            View More
          </Link>
        </div>
      </section>

      <section className="bg-white w-full flex flex-col  px-20 py-3 pb-14">
        <h1 className="text-[1.6rem] font-bold text-[#E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
          Latest Publication{" "}
          <span className="border-y-2 border-y-black w-[5rem] absolute left-[0%] bottom-[-2px]"></span>
        </h1>
        <div className="w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-4 justify-center ">
          {books.map((pub, i) => {
            return (
              <div
                key={i}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src={pub.image}
                  alt="publication Image"
                  className="w-[90%] items-center self-center md:w-full border-[1px] border-[#ccc]  cursor-pointer hover:opacity-80"
                  style={{ boxShadow: "0px 0px 10px #333" }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Page;
