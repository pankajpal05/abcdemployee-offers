import DiscoverCard from "@/components/DiscoverCard/DiscoverCard"
import FooterNote from "@/components/FooterNote/FooterNote";
import Header from "@/components/Header/Header";
import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";

export default function Home() {
  return (
    <> 
    <Header/>
   <div className="p-[50px]">
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
   <FooterNote/>
   </>
  );
}