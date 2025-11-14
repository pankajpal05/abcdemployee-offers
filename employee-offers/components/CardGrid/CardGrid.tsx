import Card from "./Card";

const cardGrid = () => {
  return (
    <div className="flex flex-col mt-[60px]">
      <h3 className="text-[#1f1f1fcc] text-xl leading-[22px] font-medium mb-5">
        The Products We Offer
      </h3>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-6 lg:grid-row-5">
        <div className=" col-span-3">
          <Card
            title={"Life Insurance - Super Term Plan"}
            subTitle={<>Upto 16% discount on first year premium.</>}
            bgDesktopImage="/images/ey-box-life-insurance.png"
            bgMobileImage={"/images/ey-box-life-insurance-mob.png"}
          />
        </div>
        <div className=" col-span-3">
          <div className=" ">
            <Card
              title={"Housing Loan"}
              subTitle={
                <>
                  Interest rates starting at <strong>7.85% p.a.</strong> and
                  processing fee of <strong>₹ 1.</strong>
                </>
              }
              bgDesktopImage="/images/ey-box-home-loan.png"
              bgMobileImage="/images/ey-box-home-loan-mob.png"
              width="70%"
            />
          </div>
          <div className=" ">
            <Card
              title={"Health Insurance"}
              subTitle={
                <>
                  <strong>19%</strong>discount on collective payment of 3 years
                  premium.
                </>
              }
              bgDesktopImage="/images/ey-box-health-insurance.png"
              bgMobileImage="/images/ey-box-health-insurance-mob.png"
              width="70%"
            />
          </div>
        </div>
        <div className=" col-span-2">
          <Card
            title={"Loan Against Mutual Funds"}
            subTitle={
              <>
                Get a Loan against your Mutual Funds starting at{" "}
                <strong>9.75% p.a.</strong>
              </>
            }
            bgDesktopImage="/images/ey-box-demat.png"
            bgMobileImage="/images/ey-box-demat-mob.png"
          />
        </div>
        <div className=" col-span-4 ">
          <Card
            title={"Gold Loan"}
            subTitle={
              <>
                Get Gold Loan at attractive interest rates starting at
                <strong>9.5% p.a.</strong>
              </>
            }
            bgDesktopImage="/images/gold-loan.png"
            bgMobileImage="/images/gold-loan-mob.png"
          />
        </div>
        <div className=" col-span-4">
          <Card
            title={"Mutual Fund"}
            subTitle={
              <>
                "Think long-term investments with Aditya Birla Sun Life Mutual
                Fund to build a better financial life.
              </>
            }
            bgDesktopImage="/images/ey-box-mutual-fundd.png"
            bgMobileImage="/images/ey-box-mutual-fund-mob.png"
          />
        </div>
        <div className=" col-span-2 ">
          <Card
            title={"Personal Loan"}
            subTitle={
              <>
                Starting from <strong>10.50% p.a.</strong> at Zero processing
                fee.
              </>
            }
            bgDesktopImage="/images/ey-box-personal-loan3.png"
            bgMobileImage="/images/ey-box-personal-loan3-mob.png"
          />
        </div>
        <div className=" col-span-2">
          <Card
            title={"Forex"}
            subTitle={
              <>
                "Seamless Forex services for
                <strong>transfers, travel, and currency exchange</strong> "
              </>
            }
            bgDesktopImage="/images/forex.png"
            bgMobileImage="/images/forex.png"
          />
        </div>
        <div className=" col-span-4 ">
          <Card
            title={"Health Insurance - Super Top Up"}
            subTitle={
              <>
                Get <strong>₹10</strong> Lakhs Sum Insured with:<br/>
                <strong>₹5</strong> Lakhs Deductible starting{" "}
                <strong>₹1612</strong>/year<br/>
                <strong>₹7</strong> Lakhs Deductible starting
                <strong> ₹809</strong>/year<br/>
                <strong>₹10 </strong>Lakhs Deductible starting{" "}
                <strong>₹565</strong>/year Premium including GST for Age 30 Male
              </>
            }
            bgDesktopImage="/images/abg-health-insu-card.png"
            bgMobileImage="/images/abg-helth-mob.png"
            width="70%"
          />
        </div>
        <div className="col-span-3 ">
          <Card
            title={"Life Insurance - Saving Plan - Nishchit Aayush"}
            subTitle={<>Increased income benefit of <strong>3%</strong></>}
            bgDesktopImage="/images/ey-box-saving-ayush.png"
            bgMobileImage="/images/ey-box-saving-ayush-mob.png"
          />
        </div>
        <div className="col-span-3 ">
          <Card
            title={"Motor Insurance - Tata AIG"}
            subTitle={
              <>
                "Get a discount of up to 5% on personal vehicles registered in
                your name.
              </>
            }
            bgDesktopImage="/images/abg-motor-insu.png"
            bgMobileImage="/images/abg-motor-insu-mob.png"
            width="70%"
          />
        </div>
      </div>
    </div>
  );
};

export default cardGrid;
