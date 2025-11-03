import PageContainer from "../shared/page-container";
import ProductSection from "../shared/product-section";
import Section from "../shared/section";

const DiscountSection = () => {
  return (
    <Section className="relative mx-auto w-full mt-20 min-h-[302px] overflow-visible">
      {/* layer background (sesuai Figma: 302px) */}
      <div
        className="absolute inset-x-0 top-0 h-[302px] bg-[url('/images/gradient-menu.png')] bg-cover md:bg-contain bg-no-repeat mx-auto"
        aria-hidden
      />


      {/* layer konten */}
      <PageContainer className="relative z-10 pt-6 pb-12">
        <ProductSection
          title="Promo Spesial Buat Kamu"
          description="Belanja hemat sambil dukung UMKM lokal? Bisa banget!"
          isPromo
        />
      </PageContainer>
    </Section>
  );
};

export default DiscountSection;
