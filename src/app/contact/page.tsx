import PageBanner from "@/components/PageBanner";
//import codes from "country-calling-code";

const Page = () => {
  return (
    <div className="w-full mb-24">
      <PageBanner
        header={"Contact Us"}
        description={"We Wanna Hear From You :)"}
        location={"Contact"}
      />

      <section className="w-full mt-24  flex flex-col md:flex-row gap-5 justify-between items-start px-4 md:px-16">
        <form className="w-full md:w-[70%] flex flex-col gap-5 ">
          <h1 className="w-[10rem] text-[1.6rem] font-semibold text-[#E1472F] h-[8vh] border-b-4 border-b-[#000] mb-8 flex items-center py-8 relative mt-14">
            Contact us
          </h1>
          <div className="w-full flex flex-col gap-1 mt-[-1rem]">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#ccc] pl-3 py-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="name">Email*</label>
            <input
              type="text"
              placeholder="Email id"
              className="w-full border border-[#ccc] pl-3 py-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="name">Phone*</label>
            <div className="w-full flex justify-between items-center gap-5">
              <select
                name=""
                id=""
                className="w-[48%] border border-[#ccc] pl-3 py-3"
              >
                {/* {codes.map((code, i) => {
                  return (
                    <option key={i} value={`+${code.countryCodes[0]}`}>
                      {code.country} (+{code.countryCodes[0]})
                    </option>
                  );
                })} */}
              </select>
              <input
                type="text"
                placeholder="Enter Phone No"
                className="w-[48%] border border-[#ccc] pl-3 py-3"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="name">Country*</label>
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-[#ccc] pl-3 py-3"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="name">Research Field*</label>
            <input
              type="text"
              placeholder="Research Field"
              className="w-full border border-[#ccc] pl-3 py-3"
            />
          </div>

          <button
            type="button"
            className="w-[6rem]  py-2 flex items-center justify-center bg-[#E03E25] text-white"
          >
            Send
          </button>
        </form>

        <div className="w-full md:w-[28%]">
          <h1 className="w-[10rem] text-[1.6rem] font-semibold text-[#E1472F] h-[8vh] border-b-4 border-b-[#000] mb-8 flex items-center py-8 relative mt-14">
            Address Info:
          </h1>

          <h5 className="text-[#929191] text-left w-full mb-10">
            For any Complaint or Event Venue related query
          </h5>
          <h5 className="text-[#929191] text-left w-full">
            {" "}
            Mail us to: team@researchleagues.com
          </h5>
          <h5 className="text-[#929191] text-left w-full">
            Website: https://researchleague.vercel.app/
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Page;
