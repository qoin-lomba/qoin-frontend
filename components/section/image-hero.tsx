import Section from "../shared/section";
import PageContainer from "../shared/page-container";
import { Button } from "../ui/button";
import RightArrow from "../icons/right-arrow";
import { ImageHeroIcon } from "../icons/image-hero";
import ShinyButton from "../shared/shiny-button";
import SlantedImageCard from "../shared/slanted-image";
interface ImageHeroProps {
  isBlank?: boolean;
}

const ImageHeroContent = () => (
  <div className="px-[41px] pb-[29px] space-y-3 pt-12 lg:pt-0 ">
    <h1 className="font-extrabold lg:text-[50px] text-3xl md:text-4xl text-white">
      Udah Cobain UMKM Viral Ini Belum? 👀
    </h1>
    <p className="lg:text-2xl text-base md:text-xl text-white">
      Yuk kenalan sama para pelaku UMKM yang lagi jadi favorit netizen.
    </p>

    <Button className="px-[26px] py-6 gap-2.5 flex items-center group hover:shadow-[0_4px_15px_rgba(233,167,0,0.5)] bg-[#FFF2D9] border border-[#FF6800] hover:bg-[#FFD6A7] shadow-[2px_4px_10px_rgba(233,109,0,0.4)] overflow-hidden text-primary">
      <div>
        <p className="lg:text-2xl text-xl">Eksplor Yuk</p>
      </div>

      <div className="p-2 bg-primary rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:translate-x-2.5 ">
        <RightArrow className="w-4 h-4 text-white" />
      </div>
    </Button>
  </div>
);

const ImageHero = ({ isBlank }: ImageHeroProps) => {
  return (
    <Section className="mt-15">
      <PageContainer className="w-full bg-[linear-gradient(285deg,#F88400_32.21%,#FFA236_54.97%,#FFA236_74.75%)] h-[508px] flex flex-col justify-center items-center rounded-[30px] relative overflow-hidden">
        {isBlank ? (
          <div className="relative lg:flex items-center justify-center mx-auto lg:space-x-15">
            <div>
              <ImageHeroIcon className="size-[300px] lg:w-full mx-auto" />
            </div>
            <div className="flex items-center justify-center flex-col lg:block">
              <p className="lg:text-[50px] text-3xl max-w-[579px] font-bold text-white text-center lg:text-start">
                Dukung UMKM lokal, dapetin reward tiap kali belanja!
              </p>
              <ShinyButton className="mt-[30px] mx-auto lg:mx-0">
                Eksplor Sekarang
              </ShinyButton>
            </div>
          </div>
        ) : (
          <div className="w-full h-full lg:flex items-center justify-center">
            <ImageHeroContent />
            <div className="lg:animate-top-marquee flex lg:block animate-marquee-sm space-y-20 -mr-20 ">
              {Array.from({ length: 10 }).map((_, idx) => {
                return (
                  <div key={idx} className="space-y-20 flex lg:block  lg:mt-20 mt-12">
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
        )}
      </PageContainer>
    </Section>
  );
};

export default ImageHero;
