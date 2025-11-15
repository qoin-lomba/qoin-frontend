"use client";

import Section from "../shared/section";
import PageContainer from "../shared/page-container";
import { Button } from "../ui/button";
import RightArrow from "../icons/right-arrow";
import { ImageHeroIcon } from "../icons/image-hero";
import ShinyButton from "../shared/shiny-button";
import SlantedImageCard from "../shared/slanted-image";
import { ExploreHero } from "../icons/explore-hero";
import GroupStars from "../icons/group-stars";
import Beam from "../icons/beam";
import GoldenRainbow from "../icons/golden-rainbow";
import { useRouter } from "next/navigation";

interface ImageHeroProps {
  isBlank?: boolean;
  isExplore?: boolean;
}

interface ImageHeroContentProps {
  title?: string;
  description?: string;
  CTAText?: string;
}

const ImageHeroContent = ({
  title = "Udah Cobain UMKM Viral Ini Belum? 👀",
  description = "Yuk kenalan sama para pelaku UMKM yang lagi jadi favorit netizen.",
  CTAText = "Eksplor Yuk",
}: ImageHeroContentProps) => (
  <div className="px-[41px] pb-[29px] space-y-3 pt-12 lg:pt-0 z-1000 ">
    <h1 className="font-extrabold lg:text-[50px] text-3xl md:text-4xl text-white">
      {title}
    </h1>
    <p className="lg:text-2xl text-base md:text-xl text-white">{description}</p>
    <Button className="px-[26px] py-6 gap-2.5 flex items-center group hover:shadow-[0_4px_15px_rgba(233,167,0,0.5)] bg-[#FFF2D9] border border-[#FF6800] hover:bg-[#FFD6A7] shadow-[2px_4px_10px_rgba(233,109,0,0.4)] overflow-hidden text-primary">
      <div>
        <p className="lg:text-2xl text-xl">{CTAText}</p>
      </div>

      <div className="p-2 bg-primary rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:translate-x-2.5 ">
        <RightArrow className="w-4 h-4 text-white" />
      </div>
    </Button>
  </div>
);

const ImageHero = ({ isBlank, isExplore }: ImageHeroProps) => {
  const router = useRouter();
  return (
    <Section className="mt-15">
      <PageContainer className="w-full bg-[linear-gradient(285deg,#F88400_32.21%,#FFA236_54.97%,#FFA236_74.75%)] h-[508px] flex flex-col justify-center items-center rounded-[30px] relative overflow-hidden">
        <GroupStars className="absolute top-0 left-0" />
        <Beam className=" absolute bottom-0" />
        <GroupStars className="absolute top-12 right-0 " />
        <Beam className="absolute top-0 left-0" onText />
        {isBlank ? (
          <div className="relative lg:flex items-center justify-center mx-auto lg:space-x-15">
            <div>
              <ImageHeroIcon className="size-[350px] lg:w-full mx-auto" />
            </div>
            <div className="flex items-center justify-center flex-col lg:block -mt-12 lg:-mt-0">
              <p className="lg:text-[50px] text-3xl max-w-[579px] font-bold text-white text-center lg:text-start">
                Dukung UMKM lokal, dapetin reward tiap kali belanja!
              </p>
              <ShinyButton
                className="mt-[30px] mx-auto lg:mx-0"
                onClick={() => router.push("/merchant/type/Semua")}
              >
                Eksplor Sekarang
              </ShinyButton>
            </div>
          </div>
        ) : !isExplore && !isBlank ? (
          <div className="w-full h-full lg:flex items-center justify-center">
            <ImageHeroContent />
            <div className="lg:animate-top-marquee flex lg:block animate-marquee-sm space-y-20 -mr-20 ">
              {Array.from({ length: 10 }).map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="space-y-20 flex lg:block  lg:mt-20 mt-12"
                  >
                    <SlantedImageCard
                      key={idx}
                      src="/images/slanted-image-2.png"
                      alt="Coins"
                      className="absolute lg:rotate-90"
                    />
                    <SlantedImageCard
                      key={idx + 1}
                      src="/images/slanted-image-1.png"
                      alt="Coins"
                      className="absolute  lg:rotate-270"
                    />
                  </div>
                );
              })}
            </div>
            <div className="space-y-20 mr-20 lg:animate-top-marquee-reverse hidden lg:block">
              {Array.from({ length: 10 }).map((_, idx) => {
                return (
                  <div key={idx} className="space-y-20 ">
                    <SlantedImageCard
                      src="/images/slanted-image-3.png"
                      alt="Coins"
                      className="absolute top-1/4  rotate-90"
                    />
                    <SlantedImageCard
                      src="/images/slanted-image-4.png"
                      alt="Coins"
                      className="absolute top-1/4  rotate-270"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          isExplore && (
            <div className="w-full px-6 lg:px-[41px] relative">
              <GoldenRainbow className="absolute -translate-y-12 right-0 z-10" />
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                {/* TEKS */}
                <div className="w-full lg:w-1/2 lg:block -mb-42 lg:mb-0 z-1000">
                  <ImageHeroContent
                    title="Cari Spot yang Vibes-nya Kamu Banget!"
                    description="Tiap tempat punya karakter. Spill, gaya nongkrong atau jajan kamu yang mana?"
                    CTAText="Eksplor Sekarang"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <ExploreHero
                    className="
                    z-1000
            w-[220px]
            sm:w-[260px]
            md:w-[300px]
            lg:w-[380px]
            xl:w-[420px]
            -mb-16 lg:-mb-12
          "
                  />
                </div>
              </div>
            </div>
          )
        )}
      </PageContainer>
    </Section>
  );
};

export default ImageHero;
