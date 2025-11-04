import PageContainer from "@/components/shared/page-container";
import Section from "@/components/shared/section";
import TabsDisplay from "./custom/tabs-display";

const MerchantDisplay = () => {
  return (
    <Section className="mt-14">
      <PageContainer className="">
        <TabsDisplay />
      </PageContainer>
    </Section>
  );
};

export default MerchantDisplay;
