import PageContainer from "../shared/page-container";
import ProductSection from "../shared/product-section";
import Section from "../shared/section";

const ExploreSection = () => {
  return (
    <Section>
      <PageContainer>
        <ProductSection
          title="Eksplor UMKM di sekitarmu"
          description="Temuin hidden gem deket rumah kamu"
          isExplore
        />
      </PageContainer>
    </Section>
  );
};

export default ExploreSection;
