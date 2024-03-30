import PageBanner from "@/components/PageBanner";

const Page = () => {
  return (
    <div className="w-full mb-24">
      <PageBanner
        header={"Associates"}
        description={"All Associates"}
        location={"Associates"}
      />

      <section className="w-full px-4 md:px-20 grid md:grid-cols-3 grid-cols-1 gap-5">
        <div className="w-full flex flex-col gap-5 items-start">
          <h1 className="text-[1.4rem] text-[#E1452D] font-bold mt-10">
            IIERD
          </h1>
          <p className="text-justify leading-7 text-[#a7a7a7]">
            International Institute of Education, Research and Development
            (IIERD) is dedicated to the dissemination of Scientific, Management
            and Technological details around the world and make all efforts in
            the direction of accomplishing this aim. It seeks to strengthen
            studies and advanced education in these fields. IIERD encourages new
            thoughts or new views on existing studies. Like Engineering,
            Electronic Communication, Modeling & Simulation, Manufacturing
            Technologies, Marketing, Accounting, Economics, History, Law,
            Behavioral Science, Information Science ..
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 items-start">
          <h1 className="text-[1.4rem] text-[#E1452D] font-bold mt-10">
            Science Society
          </h1>
          <p className="text-justify leading-7 text-[#a7a7a7]">
            Science Society is India's largest professional association its
            intended for studies development and merchandising inside the
            discipline of engineering and generation. Science Society is a
            paramount frame which has introduced technical revolution and
            sustainable development of technological know-how and generation.
            The Science Society-forum constitutes of expert wizards and distant
            places technical leaders who have left no stones unturned to boost
            the field of technology, engineering, and generation..
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 items-start">
          <h1 className="text-[1.4rem] text-[#E1452D] font-bold mt-10">ASAR</h1>
          <p className="text-justify leading-7 text-[#a7a7a7]">
            Association for Scientific and Academic Research (ASAR) is meant for
            research development and promotion in the field of engineering and
            technology. ASAR is a paramount body which has brought technical
            revolution and sustainable development of science and technology.
            The ASAR-forum constitutes of professional wizards and overseas
            technical leaders who have left no stones unturned to reinforce the
            field of science, engineering and technology .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
