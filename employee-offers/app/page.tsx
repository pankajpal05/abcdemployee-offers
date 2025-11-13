import CardGrid from "@/components/CardGrid/CardGrid";
import AdvantageBanner from "@/components/DiscoverCard/Banner/AdvantageBanner";
import DiscoverCard from "@/components/DiscoverCard/DiscoverCard";
import FooterNote from "@/components/FooterNote/FooterNote";
import Form from "@/components/FormComponents/Form";
import Header from "@/components/Header/Header";
import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-[50px]">
        <MaxWidthContainer>
          <div className="flex relative">
            <div className="w-[60.5%]">
              <AdvantageBanner/>
              <CardGrid />
            </div>
            <div className="w-2/5 sticky top-2 self-start">
              <Form />
            </div>
          </div>
        </MaxWidthContainer>
        <MaxWidthContainer>
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
      <FooterNote />
    </>
  );
}
