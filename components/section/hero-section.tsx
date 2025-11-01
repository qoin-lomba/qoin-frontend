import { ButtonHeroContent } from "@/content/content";
import AnimatedButton from "../shared/animated-button";
import BorderButton from "../shared/border-button";
import PageContainer from "../shared/page-container";
import Section from "../shared/section";
import SearchInput from "../shared/search-point";

const HeroSection = () => {
  return (
    <Section className="mt-[50px]">
      <PageContainer>
        <header className="flex flex-col items-center max-w-[741px] mx-auto text-center">
          <h1 className="text-secondary text-[40px] font-extrabold">
            Yuk, dukung produk lokal bareng!
          </h1>
          <h2 className="text-[#8D8D8D] text-[22px]">
            Temuin makanan, minuman, atau jasa lokal yang gak kalah keren sama
            brand besar
          </h2>
        </header>
        <div className="flex items-center justify-center gap-5 mt-[13px]">
          <AnimatedButton />

          {ButtonHeroContent.map((item, idx) => (
            <BorderButton
              key={idx}
              className="rounded-[100px] text-secondary border border-primary hover:bg-[#FFDEA9] hover:text-secondary px-5 py-3 gap-2"
              icon={<item.icon className="w-5 h-5" />}
            >
              {item.title}
            </BorderButton>
          ))}
        </div>
        <div>
          <SearchInput />
        </div>
      </PageContainer>
    </Section>
  );
};

export default HeroSection;
