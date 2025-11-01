import LogoIcon from "../icons/logo";
import BorderButton from "../shared/border-button";
import PageContainer from "../shared/page-container";
import PrimaryButton from "../shared/primary-button";
import Section from "../shared/section";
import DollarCoin from "@/components/icons/dollar-coin";

const Header = () => {
  return (
    <Section className="mx-auto border-b">
      <PageContainer>
        <div className="h-[102px] items-center justify-between hidden lg:flex">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <LogoIcon />
            </div>
            <h1 className="text-[28px] font-extrabold ">Qoin.in</h1>
          </div>
          <div className="hidden">
            <ul className="flex gap-[50px] text-lg font-semibold">
              <li>Beranda</li>
              <li>Jelajahi UMKM</li>
              <li>Top 100 UMKM</li>
              <li>Ulasan</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <BorderButton
                icon={<DollarCoin />}
                className="border-primary text-secondary hover:text-secondary hover:bg-white cursor-pointer px-4 py-2.5 text-xl font-semibold"
              >
                Cobain
              </BorderButton>
              <PrimaryButton className="py-2.5 px-5">Masuk</PrimaryButton>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
};

export default Header;
