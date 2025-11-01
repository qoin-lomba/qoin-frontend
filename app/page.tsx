import DisplayProductType from "@/components/section/display-product-type";
import ExploreSection from "@/components/section/explore-section";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import ImageHero from "@/components/section/image-hero";
import LastSearch from "@/components/section/last-search";
import TestimonialSection from "@/components/section/testimonial-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ImageHero />
      <DisplayProductType />
      <ExploreSection />
      <ImageHero />
      <LastSearch />
      <TestimonialSection />
    </>
  );
}
