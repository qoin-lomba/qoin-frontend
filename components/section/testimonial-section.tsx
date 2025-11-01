import Image from "next/image";
import PageContainer from "../shared/page-container";
import Section from "../shared/section";
import ShinyButton from "../shared/shiny-button";
import FluentChat from "../icons/fluent-chat";
import CommentCard from "../shared/comment-card";

const TestimonialSection = () => {
  return (
    <Section className="mt-[58px] lg:!px-0 bg-[linear-gradient(98deg,#FD6700_0%,#FF9501_46.63%,#FF944B_100%)]">
      <PageContainer className="lg:flex pt-[56px] pb-[41px] overflow-hidden ">
        <header>
          <div>
            <FluentChat />
          </div>
          <div className="w-[481px] text-white space-y-3">
            <h1 className="text-[80px] font-extrabold">Apa Kata Mereka 👀</h1>
            <p className="text-[25px] font-semibold">
              Cerita-cerita seru dari mereka yang udah dukung produk lokal!
            </p>
          </div>
          <ShinyButton className="mt-[30px]">Lihat Semua Ulasan</ShinyButton>
        </header>
        <article className="space-y-10 overflow-hidden shrink-0">
          <div className="overflow-hidden">
            <div className="flex shrink-0 gap-8 animate-marquee">
              {Array.from({ length: 10 }).map((_, index) => (
                <CommentCard key={index} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex shrink-0 gap-8 animate-marquee-reverse">
              {Array.from({ length: 10 }).map((_, index) => (
                <CommentCard key={index} />
              ))}
            </div>
          </div>
        </article>
      </PageContainer>
    </Section>
  );
};

export default TestimonialSection;
