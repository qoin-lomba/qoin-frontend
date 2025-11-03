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
          <div className="lg:w-[481px] max-w-[481px] text-white space-y-3">
            <h1 className="lg:text-[80px] text-6xl font-extrabold">
              Apa Kata Mereka 👀
            </h1>
            <p className="lg:text-[25px] text-xl font-semibold">
              Cerita-cerita seru dari mereka yang udah dukung produk lokal!
            </p>
          </div>
          <ShinyButton className="mt-[30px]">Lihat Semua Ulasan</ShinyButton>
        </header>
        <article className="space-y-10 overflow-hidden shrink-0 mt-8 lg:mt-0">
          <div className="overflow-hidden">
            <div className="flex shrink-0 gap-8 lg:animate-marquee animate-marquee-sm">
              {Array.from({ length: 10 }).map((_, index) => (
                <CommentCard key={index} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex shrink-0 gap-8 lg:animate-marquee-reverse animate-marquee-sm-reverse">
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
