import { Card, CardContent } from "../ui/card";
import Coins from "@/components/icons/coins";
import ShoppingBag from "@/components/icons/shopping-bag";
import PageContainer from "./page-container";
import Section from "./section";
import ShinyButton from "./shiny-button";

interface CallingActionProps {
  openModal?: () => void;
}
const CallingAction = ({ openModal }: CallingActionProps) => {
  return (
    <Section className="mt-15">
      <PageContainer>
        <Card className="bg-[linear-gradient(86deg,#FD6700_4.98%,#FF8E0D_48.74%,#FD6700_91.22%)] text-center relative overflow-hidden lg:h-[275px] lg:w-10/11 mx-auto">
          {/* Decorative icons */}
          <div className="pointer-events-none select-none">
            <Coins className="absolute top-0 left-0 w-32 h-32 lg:size-[280px]" />
            <ShoppingBag className="absolute top-0 right-0 w-32 h-32 lg:size-[280px]" />
          </div>
          <CardContent className="text-white relative">
            <h1 className="text-xl md:text-3xl lg:text-[40px] font-extrabold">
              Mulai perjalananmu bareng Qoin.in
            </h1>
            <p className="md:text-lg lg:text-[22px] font-medium">
              Yuk, jadi bagian dari komunitas yang dukung UMKM lokal!
            </p>
            <ShinyButton className="mt-[35px]" onClick={openModal}>
              Gabung Sekarang
            </ShinyButton>
          </CardContent>
        </Card>
      </PageContainer>
    </Section>
  );
};

export default CallingAction;
