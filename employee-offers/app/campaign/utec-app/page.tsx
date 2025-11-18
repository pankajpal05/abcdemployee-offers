import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import FooterNote from "@/components/FooterNote/FooterNote";

const UtecAppCampaignPage = () => {
    console.log("Rendering UtecAppCampaignPage");
    return <div>
        
 <div className="max-w-[1200px] mx-auto px-4 py-10">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold leading-snug text-gray-900">
      Unlock <span className="text-primary">financial tools</span>, 
      investment insights, &amp; expert guidance - all in 
      <span className="text-primary">one convenient app</span>
    </h2>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src="https://www.adityabirlacapital.com/Assets/Project/Campaign/images/utec/get_the_app.png" 
        className="w-full max-w-sm md:max-w-md object-contain"
        alt=""
      />
    </div>

    {/* Right Side Wrapper */}
    <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-6">
      
      {/* Top Logo Block */}
      <div className="flex items-center gap-4 mb-6">
        <img 
          src="	https://www.adityabirlacapital.com/Assets/Project/Campaign/images/utec/abc_logo.png" 
          className="w-14 h-14 object-contain"
          alt=""
        />
        <div>
          <span className="block text-xl font-semibold">Get the App</span>
          <p className="text-gray-600 text-sm">#1 All in one Finance App in India</p>
        </div>
      </div>

      {/* Features */}
      <div className="flex items-center gap-6 mb-6">
        
        <div className="text-center">
          <span className="block text-lg font-semibold">4.2 ☆</span>
          <p className="text-gray-600 text-sm">12.1k reviews</p>
        </div>

        <div className="text-center">
          <span className="block text-lg font-semibold">5M+</span>
          <p className="text-gray-600 text-sm">Downloads</p>
        </div>

      </div>

      {/* Button */}
      <a 
        href="javascript:void(0);"
        className="inline-block bg-white border border-gray-300 text-gray-900 font-medium px-5 py-2 rounded-md shadow hover:bg-gray-100 transition"
      >
        Download App
      </a>

    </div>
  </div>
</div>




        <Accordion AccordionTitle={"Disclaimer"}>
        <AccordionBody
          title="ABCD"
          subTitle={
            "Strictly for Internal Circulation only. Any kind of further circulation is prohibited."
          }
          description={`ADITYA BIRLA CAPITAL DIGITAL LIMITED (ABCDL") |CIN: U64990MH2023PLC399485 | IRDAI Reg. No. CA0871 | AMFI Reg. No. ARN-270149 |Registered Address: 18th Floor, One World Center, Tower 1, Jupiter Mills Compound,841 Senapati Baput Marg, Elphinstone Road Delisle Road, Mumbai Maharashtra 400013, Participation by the ABCD'S clients in the insurance products is purely on a voluntary basis.The Trade Logo "Aditya Birla Capital" Displayed Above Is Owned By ADITYA BIRLA MANAGEMENT CORPORATION PRIVATE LIMITED (Trademark Owner) And Used By ADITYA BIRLA CAPITAL DIGITAL LIMITED (ABCDL) under the License. ABCDL does not underwrite the risk or act as an insurer. Please read the policy terms and conditions carefully before concluding the sale. Beware of spurious/fraud phone calls!! (IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.) ABCDL is only a lending Service provider and not lender. Mutual Fund investments are subject to market risk, read all scheme related documents carefully. T&C Apply.`}
        />
        <AccordionBody
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
              </a>
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

        <AccordionBody
          title="ABSLI"
          subTitle="Terms and conditions of the website are applicable."
          description="The interest rate constitute the rack rate for all customers. Actual interest rate for any customer and will be as communicated at the time of loan sanction and disbursal, it will be subject to changes from time to time and is at sole discretion of ABHFL.Loans originated, booked and serviced by Aditya Birla Housing Finance Limited, subject to credit appraisal in sole discretion of Aditya Birla Housing Finance Limited and terms and conditions as agreed under individual loan agreement."
        />
        <AccordionBody
          title="Aditya Birla Sun Life Liquid Fund"
          imageLink="/images/abg-life-liquid-fund.png"
        />
      </Accordion>
      <FooterNote />
    </div>;
}

export default UtecAppCampaignPage;