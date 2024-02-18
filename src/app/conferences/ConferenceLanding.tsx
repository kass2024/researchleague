"use client";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { conferences } from "@/constants";

const ConferenceLanding = () => {
  return (
    <div className="w-full">
      <PageBanner
        header={"Upcoming Conference"}
        description={""}
        location={"Upcoming"}
      />
      <section className="w-full flex flex-col items-center px-16">
        <h1 className="text-[1.6rem] font-semibold text-[#E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
          Our Upcoming Conference
          <span className="border-y-2 border-y-black w-[5rem] absolute left-[40%] bottom-[-2px]"></span>
        </h1>

        <div className="w-full grid md:grid-cols-4 gap-x-10 grid-cols-1">
          {conferences.map((conf, i) => {
            return (
              <div className="w-full h-full" key={i}>
                <Image
                  src={conf?.image}
                  alt={conf?.location + " Meeting"}
                  className="w-full h-3/4"
                />
                <Link
                  href={`/conferences?country=${conf?.location}`}
                  className="w-full flex items-center justify-center text-center mt-4 mb-6 font-semibold text-[1.2rem]"
                >
                  {conf.location}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ConferenceLanding;
