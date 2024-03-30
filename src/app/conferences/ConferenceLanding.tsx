import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { conferences } from "@/constants";

const ConferenceLanding = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-[1.6rem] font-semibold text-[#E1472F] h-[8vh] border-b-[1px] border-b-[#ccc] mb-8 flex items-center py-8 relative mt-14">
        Payment Process for Research Leagues Conference
      </h1>

      <div className="w-full px-16 text-center">
        <p>
          If you are interested in one of our upcoming conferences, kindly make payment on the below PayPal link after consulting the price table:
        </p>

        <p>
          <a href="https://paypal.me/parrot2024575" className="bg-blue-500 text-white px-4 py-2 rounded-md" target="_blank" rel="noopener noreferrer">Make payment here</a>
        </p>
        <br/> {/* Inserting a line break here */}
        <p>
          Note: After making the payment for the conference using the PayPal method, kindly fill the attached form and send it to this email:{" "}
          <a href="mailto:team@research-leagues.com" className="text-blue-500 underline">team@research-leagues.com</a>{" "}
          of the Conference Coordinator to get the conference invitation.
        </p>

        <h2 className="text-xl font-semibold mt-8">Online Payment Process</h2>

        <div className="w-full overflow-x-auto">
          <table className="mt-4 mx-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Categories</th>
                <th className="py-2 px-4 border-b">Regular Registration Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Live Onsite Presentation</td>
                <td className="py-2 px-4 border-b">-   USD 399</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Live Onsite Presentation with Scopus Publication</td>
                <td className="py-2 px-4 border-b">-   USD 599</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Live Onsite Listener</td>
                <td className="py-2 px-4 border-b">-   USD 201</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Online Presentation</td>
                <td className="py-2 px-4 border-b">-   USD 189</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Online Presentation with Scopus Publication</td>
                <td className="py-2 px-4 border-b">-   USD 499</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Online Listener</td>
                <td className="py-2 px-4 border-b">-   USD 115</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="mr-4">
            <a href="/assets/download/Presenter-Registration-Form.docx" download className="bg-blue-500 text-white px-4 py-2 rounded-md">Download Presenter Registration Form</a>
          </p>
          <p>
            <a href="/assets/download/Listener-Registration-Form.docx" download className="bg-blue-500 text-white px-4 py-2 rounded-md">Download Listener Registration Form</a>
          </p>
        </div>
      </div>

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
                  className="w-full flex items-center justify-center text-center mt-4 mb-6 font-semibold text-[1.2rem] bg-blue-500 text-white px-4 py-2 rounded-md"
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
