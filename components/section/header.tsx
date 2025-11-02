import useOpenModal from "@/hooks/landing-page/use-open-modal";
import LogoIcon from "../icons/logo";
import BorderButton from "../shared/border-button";
import PageContainer from "../shared/page-container";
import PrimaryButton from "../shared/primary-button";
import Section from "../shared/section";
import DollarCoin from "@/components/icons/dollar-coin";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface HeaderProps {
  openModal: () => void;
}
const Header = ({ openModal }: HeaderProps) => {
  return (
    <Section className="mx-auto border-b">
      <PageContainer>
        {/* Desktop header */}
        <div className="h-[102px] items-center justify-between hidden lg:flex">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <LogoIcon />
            </div>
            <h1 className="text-[28px] font-extrabold ">Qoin.in</h1>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-[50px] text-lg font-semibold">
              <li>Beranda</li>
              <li>Jelajahi UMKM</li>
              <li>Top 100 UMKM</li>
              <li>Ulasan</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <BorderButton icon={<DollarCoin />}>Cobain</BorderButton>
              <PrimaryButton className="py-2.5 px-5" onClick={openModal}>
                Masuk
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex h-[72px] items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <LogoIcon />
            </div>
            <h1 className="text-2xl font-extrabold">Qoin.in</h1>
          </div>

          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="p-2 rounded-md border"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8">
                      <LogoIcon />
                    </div>
                    <span className="text-lg font-extrabold">Qoin.in</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="p-4">
                <ul className="flex flex-col gap-4 text-base font-semibold">
                  <li>Beranda</li>
                  <li>Jelajahi UMKM</li>
                  <li>Top 100 UMKM</li>
                  <li>Ulasan</li>
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <BorderButton
                    icon={<DollarCoin />}
                    className="border-primary text-secondary hover:text-secondary hover:bg-white cursor-pointer px-4 py-2 text-base font-semibold"
                  >
                    Cobain
                  </BorderButton>
                  <PrimaryButton className="py-2 px-4" onClick={openModal}>
                    Masuk
                  </PrimaryButton>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </PageContainer>
    </Section>
  );
};

export default Header;
