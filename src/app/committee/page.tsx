import PageBanner from "@/components/PageBanner";
import { committee } from "@/constants";

const Page = () => {
  return (
    <div className="w-full mb-16">
      <PageBanner
        header={"Meet Our Committee"}
        description={"Meet Our Awesome Team"}
        location={"Committee"}
      />
      <section className="w-full flex flex-col items-center">
        <h1 className="text-[1.6rem] font-semibold text-[#E1472F] h-[8vh] border-b-[2px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
          Meet Our Committee{" "}
          <span className="border-y-2 border-y-black w-[5rem] absolute left-[34%] bottom-[-2px]"></span>
        </h1>
        <div
          className="w-full flex flex-col items-start md:w-4/6 border-[1px] border-dashed border-[#232323] py-4 px-3"
          style={{ boxShadow: "0px 0px 10px #c8c8c8" }}
        >
          {committee.map((com, i) => {
            return (
              <div key={i} className="w-full flex flex-col gap-1 my-3">
                <h4 className="text-[1.1rem] font-semibold">{com.name}</h4>
                <h6 className="text-[#ACACAC]">{com.department}</h6>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Page;
