import Clock from "@/components/icons/clock-icon";
import LocationIcon from "@/components/icons/location";
import RightArrow from "@/components/icons/right-arrow";
import Telephone from "@/components/icons/telephone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

type AsideCardContent = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const asideCardContent: AsideCardContent[] = [
  {
    icon: <Telephone className="text-secondary" />,
    title: "Telepon",
    description: "081222122",
  },
  {
    icon: <LocationIcon className="text-transparent" />,
    title: "Lokasi",
    description: "Jl. Sudirman No. 123, Jakarta Selatan",
  },
  {
    icon: <Clock className="text-secondary" />,
    title: "Jam Operasional",
    description: "08:00 - 22:00",
  },
];

const AsideCard = ({ className }: { className?: string }) => {
  return (
    <Card className={`${className}`}>
      <CardContent className="pb-2">
        <h1 className="lg:text-[22px] font-bold text-lg">Informasi Kontak</h1>
        {asideCardContent.map((item, idx) => (
          <div key={idx} className="">
            <div className="flex items-center space-x-4">
              <div className="lg:p-2.5 p-1.5 bg-[#FFF7ED] lg:rounded-[14px] rounded-[7px]">
                {item.icon}
              </div>
              <div>
                <h1 className="text-sm lg:text-base text-[#8D8D8D]">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#E1E1E1] my-5" />
          </div>
        ))}
        <Button className="px-[26px] py-6 gap-2.5 flex items-center group hover:shadow-[2px_4px_10px_0_rgba(233,109,0,0.4)] hover:bg-[linear-gradient(86deg,#FD6700_4.98%,#FF944B_94.22%)] overflow-hidden mx-auto ">
          <div>
            <p className="text-2xl ">Chat Sekarang!</p>
          </div>

          <div className="p-2 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:translate-x-2.5 ">
            <RightArrow className="w-4 h-4 text-primary" />
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AsideCard;
