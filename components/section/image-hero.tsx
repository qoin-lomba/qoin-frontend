import Section from "../shared/section";
import PageContainer from "../shared/page-container";
import { Button } from "../ui/button";
import PlaceholderImage from "../icons/placeholder-image";
import RightArrow from "../icons/right-arrow";

const ImageHero = () => {
  return (
    <Section className="mt-15">
      <PageContainer className="w-full bg-[#D9D9D9] h-[508px] flex flex-col justify-center items-center rounded-[30px] relative">
        <div className="relative size-36 mx-auto">
          <PlaceholderImage className="w-full h-full text-white" />
        </div>
        <div className="absolute bottom-0 left-0 px-[41px] pb-[29px] space-y-3 ">
          <h1 className="font-extrabold text-[30px] text-secondary">
            Udah Cobain UMKM Viral Ini Belum? 👀
          </h1>
          <p className="text-2xl text-[#8D8D8D]">
            Yuk kenalan sama para pelaku UMKM yang lagi jadi favorit netizen.
          </p>

          <Button className="px-[26px] !py-4 gap-2.5 flex items-center">
            <div className="">
              <p className="text-2xl ">Eksplor Yuk</p>
            </div>

            <div className="p-2 bg-white rounded-full flex items-center justify-center">
              <RightArrow className="w-4 h-4 text-primary" />
            </div>
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
};

export default ImageHero;
