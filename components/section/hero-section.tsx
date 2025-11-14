import { ButtonHeroContent } from "@/content/content";
import AnimatedButton from "../shared/animated-button";
import BorderButton from "../shared/border-button";
import PageContainer from "../shared/page-container";
import Section from "../shared/section";
import SearchInput from "../shared/search-point";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <Section className="mt-[50px]">
      <PageContainer>
        <header className="flex flex-col items-center max-w-[741px] mx-auto text-center">
          <motion.h1
            className="text-secondary lg:text-[40px] text-[28px] font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Yuk, dukung produk lokal bareng!
          </motion.h1>
          <motion.h2
            className="text-[#8D8D8D] text-[22px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Temuin makanan, minuman, atau jasa lokal yang gak kalah keren sama
            brand besar
          </motion.h2>
        </header>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5 mt-[13px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatedButton />

          {ButtonHeroContent.map((item, idx) => (
            <BorderButton
              key={idx}
              className="rounded-[100px] text-secondary border border-primary hover:bg-[#FFDEA9] hover:text-secondary px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 gap-2 text-sm sm:text-base md:text-lg"
              icon={<item.icon className="w-4 h-4" />}
            >
              {item.title}
            </BorderButton>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SearchInput />
        </motion.div>
      </PageContainer>
    </Section>
  );
};

export default HeroSection;
