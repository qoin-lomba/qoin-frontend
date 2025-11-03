import PageContainer from "../shared/page-container";
import ProductSection from "../shared/product-section";
import Section from "../shared/section";

const DiscountSection = () => {
  return (
    <Section className="relative w-full mt-20 overflow-visible">
      {/* Full background */}
      <div
        className="
          absolute inset-0 
          h-[302px] w-full 
          bg-[url('/images/gradient-menu.png')] 
          bg-cover md:bg-contain bg-no-repeat bg-center
          rounded-[20px]
        "
        aria-hidden
      />

      {/* Konten */}
      <PageContainer className="relative z-10 pt-10 pb-8">
        <div className="text-center">
          <ProductSection
            title="Promo Spesial Buat Kamu"
            description="Belanja hemat sambil dukung UMKM lokal? Bisa banget!"
            isPromo
          />
        </div>
      </PageContainer>
    </Section>
  );
};

export default DiscountSection;
