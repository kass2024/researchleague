"use client";

import PageBanner from "@/components/PageBanner";
import { publications } from "@/constants";
import { useState } from "react";

const Page = () => {
  const [activeButton, setActiveButton] = useState("Scopus");
  return (
    <div className="w-full mb-24">
      <PageBanner
        header={"Publication"}
        description={""}
        location={"Journals"}
      />

      <section className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 my-4 px-4">
          <button
            onClick={() => setActiveButton("Scopus")}
            className={`w-full md:w-[17%] py-4 font-bold text-white ${
              activeButton === "Scopus" ? "bg-[#DF4027]" : "bg-[#692014]"
            }`}
          >
            SCOPUS INDEXED JOURNALS{" "}
          </button>
          <button
            onClick={() => setActiveButton("UGC Care List")}
            className={`w-full md:w-[17%] py-4 font-bold text-white ${
              activeButton === "UGC Care List" ? "bg-[#DF4027]" : "bg-[#692014]"
            }`}
          >
            UGC CARE LIST JOURNALS
          </button>
          <button
            onClick={() => setActiveButton("ESCI-Web of Science")}
            className={`w-full md:w-[17%] py-4 font-bold text-white ${
              activeButton === "ESCI-Web of Science"
                ? "bg-[#DF4027]"
                : "bg-[#692014]"
            }`}
          >
            WEB OF SCIENCE JOURNALS
          </button>
          <button
            onClick={() => setActiveButton("Google Scholar, DRJI, Cross Ref")}
            className={`w-full md:w-[17%] py-4 font-bold text-white ${
              activeButton === "Google Scholar, DRJI, Cross Ref"
                ? "bg-[#DF4027]"
                : "bg-[#692014]"
            }`}
          >
            GOOGLE SCHOLAR JOURNALS
          </button>
        </div>

        <h1 className="text-[1.7rem] text-[#C52521] mt-16 mb-6 w-full text-left font-extrabold px-4 md:px-24">
          {activeButton === "Scopus" ? "SCOPUS INDEXED JOURNALS" : activeButton}
        </h1>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5 px-4 md:px-[4.5rem] justify-between">
          {publications
            .filter((pub, i) => pub.index === activeButton)
            .map((pub, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-[40vh] flex flex-col gap-3 items-start py-5 pl-4 border border-[#9a9999]"
                >
                  <h4 className="text-[#5D95C8] font-bold">{pub.name}</h4>
                  <h4 className="text-[#33A9BE] font-bold">
                    ISSN:{" "}
                    <span className="text-black font-light">{pub.issn}</span>
                  </h4>
                  <h4 className="text-[#33A9BE] font-bold">
                    Indexed In:{" "}
                    <span className="text-black font-light">{pub.name}</span>
                  </h4>
                  <button className="py-3 px-4 bg-[#DF4027] text-white font-bold mt-5 flex items-center justify-center rounded">
                    Submit Paper
                  </button>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Page;
