"use client";

import DiscountSection from "@/components/section/discount-section";
import DisplayProductType from "@/components/section/display-product-type";
import ExploreSection from "@/components/section/explore-section";
import Footer from "@/components/section/footer";
import Header from "@/components/section/header";
import HeroSection from "@/components/section/hero-section";
import ImageHero from "@/components/section/image-hero";
import InspiratedSection from "@/components/section/inspired-section";
import LastSearch from "@/components/section/last-search";
import TestimonialSection from "@/components/section/testimonial-section";
import CallingAction from "@/components/shared/calling-action";
import DialogLogin from "@/components/shared/dialog-login";
import useOpenModal from "@/hooks/landing-page/use-open-modal";

export default function Home() {
  const { closeModal, modalIsOpen, openModal } = useOpenModal();
  return (
    <>
      <Header openModal={openModal} />
      <HeroSection />
      <ImageHero isBlank />
      <DisplayProductType />
      <ExploreSection />
      <ImageHero />
      <LastSearch />
      <DiscountSection />
      <TestimonialSection />
      <InspiratedSection />
      <ImageHero />
      <CallingAction openModal={openModal} />
      <DialogLogin open={modalIsOpen} onClose={closeModal} />
      <Footer />
    </>
  );
}
