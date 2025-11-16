import Accordian from "@/components/Accordion/Accordion";
import AccordianBody from "@/components/Accordion/AccordionBody";
import CardGrid from "@/components/CardGrid/CardGrid";
import AdvantageBanner from "@/components/DiscoverCard/Banner/AdvantageBanner";
import DiscoverCard from "@/components/DiscoverCard/DiscoverCard";
import FooterNote from "@/components/FooterNote/FooterNote";
import Form from "@/components/EmployeeForm/EmployeeForm";
import Header from "@/components/Header/Header";
import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-[50px]">
        <MaxWidthContainer>
          <div className="flex flex-col lg:flex-row lg:gap-5 relative">
            <div className="w-full lg:w-[60.5%] flex flex-col">
              <div className="order-1">
                <AdvantageBanner />
              </div>

              <div className="order-2 mt-12 lg:mt-0 lg:hidden">
                <Form />
              </div>

              <div className="order-3">
                <CardGrid />
              </div>
            </div>

            <div className="hidden lg:block w-full lg:w-2/5 sticky top-2 self-start">
              <Form />
            </div>
          </div>
        </MaxWidthContainer>
        <MaxWidthContainer extraClasses="max-md:py-0 max-md:pt-7 ">
          <DiscoverCard
            imageAlignment="right"
            title={"Discover Convenience Like Never Before"}
            subTitle={
              "Unlock financial tools, Investment insights, And Expert Guidance - All in one convenient app"
            }
            description={"Download the ABCD App Now"}
            buttonTitle={"Download App"}
          />
        </MaxWidthContainer>
      </div>
      <Accordian AccordionTitle={"Disclaimer"}>
        <AccordianBody
          title="ABCD"
          subTitle={
            "Strictly for Internal Circulation only. Any kind of further circulation is prohibited."
          }
          description={`ADITYA BIRLA CAPITAL DIGITAL LIMITED (ABCDL") |CIN: U64990MH2023PLC399485 | IRDAI Reg. No. CA0871 | AMFI Reg. No. ARN-270149 |Registered Address: 18th Floor, One World Center, Tower 1, Jupiter Mills Compound,841 Senapati Baput Marg, Elphinstone Road Delisle Road, Mumbai Maharashtra 400013, Participation by the ABCD'S clients in the insurance products is purely on a voluntary basis.The Trade Logo "Aditya Birla Capital" Displayed Above Is Owned By ADITYA BIRLA MANAGEMENT CORPORATION PRIVATE LIMITED (Trademark Owner) And Used By ADITYA BIRLA CAPITAL DIGITAL LIMITED (ABCDL) under the License. ABCDL does not underwrite the risk or act as an insurer. Please read the policy terms and conditions carefully before concluding the sale. Beware of spurious/fraud phone calls!! (IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.) ABCDL is only a lending Service provider and not lender. Mutual Fund investments are subject to market risk, read all scheme related documents carefully. T&C Apply.`}
        />
        <AccordianBody
          title="ABC"
          description={
            <>
              One World Center, Tower 1, 18th Floor, Jupiter Mill Compound, 841,
              Senapati Bapat Marg, Elphinstone Road, Mumbai, Maharashtra - 400
              013 For customer care and other queries:{" "}
              <a
                href="mailto:care.finance@adityabirlacapital.com"
                className="text-[#4d4d4f] underline"
              >
                care.finance@adityabirlacapital.com
              </a>{" "}
              Toll-free no.:{" "}
              <a href="tel:1800-270-7000" className="text-[#4d4d4f]">
                1800-270-7000
              </a>{" "}
              I{" "}
              <a
                href="https://www.adityabirlacapital.com"
                className="text-[#4d4d4f] underline"
              >
                www.adityabirlacapital.com
              </a>
              . Terms and conditions apply. Credit at sole discretion of Aditya
              Birla Capital Limited (ABCL) and subject to credit appraisal,
              eligibility check, rates etc. ABCL may use the services of their
              authorized agencies in servicing the requirements.
            </>
          }
        />

        <AccordianBody
          title="ABSLI"
          subTitle="Terms and conditions of the website are applicable."
          description="The interest rate constitute the rack rate for all customers. Actual interest rate for any customer and will be as communicated at the time of loan sanction and disbursal, it will be subject to changes from time to time and is at sole discretion of ABHFL.Loans originated, booked and serviced by Aditya Birla Housing Finance Limited, subject to credit appraisal in sole discretion of Aditya Birla Housing Finance Limited and terms and conditions as agreed under individual loan agreement."
        />
        <AccordianBody
          title="Aditya Birla Sun Life Liquid Fund"
          imageLink="/images/abg-life-liquid-fund.png"
        />
      </Accordian>
      <FooterNote />
    </>
  );
}
