import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import useClickLike from "@/hooks/landing-page/use-click-like";
import { Heart } from "lucide-react";
import Clock from "../icons/clock-icon";
import RightArrow from "../icons/right-arrow";

const InspiratedItem = () => {
  const { isLiked, toggleLike } = useClickLike();
  return (
    <Card className="p-0 rounded-[20px] overflow-hidden group hover:box-shadow-lg transition-all duration-300 hover:shadow-primary pb-4">
      <CardHeader className="!p-0 relative overflow-hidden w-[413px] h-[180px] md:h-[200px] ">
        <div
          className={`size-10 absolute top-3 right-13  ${
            isLiked ? "bg-primary" : "bg-[#FFD6A7]"
          } rounded-full flex items-center justify-center z-100 `}
          onClick={toggleLike}
        >
          <Heart
            className={`transition duration-300 ${
              isLiked ? "text-[#FFD6A7] fill-current" : "text-primary"
            }`}
          />
        </div>
        <Image
          src={"/images/cafe-image.png"}
          alt="Toko"
          fill
          className="w-full h-full object-cover overflow-hidden group-hover:scale-[117%] transition-all duration-500"
        />
      </CardHeader>
      <CardContent className="space-y-3 px-2">
        <h1 className="text-[#606060] text-base md:text-lg lg:text-[22px] font-semibold">
          5 Ide Masakan Low Budget
        </h1>
        <p className="lg:text-lg md:text-base text-sm font-semibold text-[#8D8D8D]">
          Cuma modal 30 ribu, kamu udah bisa masak ayam kremes dan tumis sayur
          yang mirip...
        </p>
        <div className="md:flex md:space-y-0 space-y-3 justify-between">
          <div className="flex items-center gap-2">
            <Clock className="size-3" />
            <p className="lg:text-lg text-xs text-[#8D8D8D]">5 Menit baca</p>
          </div>
          <div className="flex items-center cursor-pointer gap-1">
            <p className="text-primary lg:text-lg md:text-sm text-xs ">
              Baca Selengkapnya
            </p>
            <RightArrow className="lg:size-3 size-2 text-primary " />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InspiratedItem;
