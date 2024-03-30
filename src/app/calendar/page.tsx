import PageBanner from "@/components/PageBanner";
import { conferences } from "@/constants";
const Page = () => {
  return (
    <div className="w-full">
      <PageBanner
        header={"Calender"}
        description={"All Events"}
        location={"Calender"}
      />

      <section className="w-full flex flex-col items-center px-4 md:px-[5.5rem]">
        {conferences.map((conf, i) => {
          return (
            <div key={i} className="w-full flex flex-col items-center">
              <h1 className="text-[1.6rem] font-semibold text-[#E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
                {conf.location}
                <span className="border-y-2 border-y-black w-[5rem] absolute left-[40%] bottom-[-2px]"></span>
              </h1>

              <table className="w-full">
                <thead className="w-full bg-black text-white">
                  <tr className="w-full py-4">
                    <th className="w-[33.3%] py-5">Date</th>
                    <th className="w-[33.3%] py-5">Conference</th>
                    <th className="w-[33.3%] py-5">Location</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {conf.subs.map((sub, i) => {
                    return (
                      <tr
                        key={i}
                        className={`w-full py-4 ${
                          i % 2 !== 0 ? "bg-[#EEEEEE]" : ""
                        }`}
                      >
                        <td className="py-8 border-x-[1px] border-x-[#ccc] text-center">
                          {sub.start.date} {sub.start.month}, {sub.start.year}
                        </td>
                        <td className="py-8 border-r-[#ccc] border-r-[1px] text-center text-[#E1472F] font-bold">
                          {sub.name}
                        </td>
                        <td className="py-8 border-r-[#ccc] border-r-[1px] text-center">
                          {sub.location}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Page;
