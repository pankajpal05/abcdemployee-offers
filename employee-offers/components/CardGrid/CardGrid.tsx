import Card from "./Card";

const cardGrid = () => {
  return (
   <div className="flex flex-col mt-[60px]">
       <h3 className="text-[#1f1f1fcc] text-xl leading-[22px] font-medium mb-5">The Products We Offer</h3>
    <div className="grid grid-cols-6 grid-row-5 gap-4 ">
     
      <div className=" col-span-3">
        <Card
          title={"Life Insurance - Super Term Plan"}
          subTitle={"Upto 16% discount on first year premium."}
          bgImage="/images/ey-box-life-insurance.png"
        />
      </div>
      <div className=" col-span-3">
        <div className=" ">
          <Card
            title={"Housing Loan"}
            subTitle={
              "Interest rates starting at 7.85% p.a. and processing fee of ₹ 1."
            }
            bgImage="/images/ey-box-home-loan.png"
            width="70%"
          />
        </div>
        <div className=" ">
          <Card
            title={"Health Insurance"}
            subTitle={"19% discount on collective payment of 3 years premium."}
            bgImage="/images/ey-box-health-insurance.png"
            width="70%"
          />
        </div>
      </div>
      <div className=" col-span-2">
        <Card
          title={"Loan Against Mutual Funds"}
          subTitle={
            "Get a Loan against your Mutual Funds starting at 9.75% p.a."
          }
          bgImage="/images/ey-box-demat.png"
        />
      </div>
      <div className=" col-span-4 ">
        <Card
          title={"Gold Loan"}
          subTitle={
            "Get Gold Loan at attractive interest rates starting at 9.5% p.a."
          }
          bgImage="/images/gold-loan.png"
        />
      </div>
      <div className=" col-span-4">
        <Card
          title={"Mutual Fund"}
          subTitle={
            "Think long-term investments with Aditya Birla Sun Life Mutual Fund to build a better financial life."
          }
          bgImage="/images/ey-box-mutual-fundd.png"
        />
      </div>
      <div className=" col-span-2 ">
        <Card
          title={"Personal Loan"}
          subTitle={"Starting from 10.50% p.a. at Zero processing fee."}
          bgImage="/images/ey-box-personal-loan3.png"
        />
      </div>
      <div className=" col-span-2">
        <Card
          title={"Forex"}
          subTitle={
            "Seamless Forex services for transfers, travel, and currency exchange"
          }
          bgImage="/images/forex.png"
        />
      </div>
      <div className=" col-span-4 ">
        <Card
          title={"Health Insurance - Super Top Up"}
          subTitle={`Get ₹10 Lakhs Sum Insured with:

₹5 Lakhs Deductible starting ₹1612/year

₹7 Lakhs Deductible starting ₹809/year

₹10 Lakhs Deductible starting ₹565/year

Premium including GST for Age 30 Male`}
          bgImage="/images/abg-health-insu-card.png"
          width="70%"
        />
      </div>
      <div className="col-span-3 ">
        <Card
          title={"Life Insurance - Saving Plan - Nishchit Aayush"}
          subTitle={"Increased income benefit of 3%."}
          bgImage="/images/ey-box-saving-ayush.png"
        />
      </div>
      <div className="col-span-3 ">
        <Card
          title={"Motor Insurance - Tata AIG"}
          subTitle={
            "Get a discount of up to 5% on personal vehicles registered in your name."
          }
          bgImage="/images/abg-motor-insu.png"
          width="70%"
        />
      </div>
    </div>
    </div>
  );
};

export default cardGrid;
