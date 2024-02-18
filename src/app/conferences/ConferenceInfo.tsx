"use client";
import { usePathname } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { conferences } from "@/constants";
import Image from "next/image";

const ConferenceInfo = ({ conference }: { conference: any }) => {
  const activeId = usePathname();
  // console.log(Number(activeId));
  return (
    <div className="w-full mb-16">
      <PageBanner
        header={`Upcoming Conference ${conference?.location}`}
        description={""}
        location={"Upcoming"}
        className={"text-[1.3rem]"}
      />

      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-x-7 gap-y-4 justify-center px-4 md:px-16 mt-3">
        {conference?.subs.map((conf: any, i: any) => {
          return (
            <div key={i} className="w-full h-full flex flex-col items-start">
              <div className="w-full relative">
                <Image src={conf?.image} alt="" className="w-full" />
                <div className="w-[5.4rem] flex flex-col pt-0 py-1 absolute top-3 left-4 text-white bg-[#171717] items-center">
                  <h1 className="text-[2.8rem] font-bold">
                    {conf?.start?.date}
                  </h1>
                  <h5>
                    {conf?.start.month}, {conf?.start?.year}
                  </h5>
                </div>
                <div className="w-[5.4rem] flex flex-col pt-0 py-1 absolute top-3 left-4 left-[8.7rem] text-white bg-[#DF4027] items-center">
                  <h1 className="text-[2.8rem] font-bold">{conf?.end?.date}</h1>
                  <h5>
                    {conf?.end?.month}, {conf?.end?.year}
                  </h5>
                </div>
              </div>
              <h5 className="text-[#DF4027] my-2">{conf?.name}</h5>
              <h6 className="text-[#ccc] mb-4">{conf?.location}</h6>

              <div className="w-full flex items-center justify-between">
                <button className="py-2 w-[12rem] bg-[#f76b55] hover:bg-[#DF4027] text-white rounded-md">
                  Call for Paper
                </button>
                <button className="py-2 w-[12rem] bg-[#f76b55] hover:bg-[#DF4027] text-white rounded-md">
                  Paper Submission
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConferenceInfo;
