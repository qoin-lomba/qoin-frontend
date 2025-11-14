"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Heart } from "lucide-react";
import useClickLike from "@/hooks/landing-page/use-click-like";
import RatingStar from "../icons/rating-star";

const DisplayMerchant = () => {
  const { isLiked, toggleLike } = useClickLike();

  return (
    <Card className="p-0 rounded-[20px] overflow-hidden group hover:box-shadow-lg transition-all duration-300 hover:shadow-primary">
      <CardHeader className="!p-0 relative overflow-hidden w-full size-full h-[180px] md:h-[220px]">
        <div
          className={`size-10 absolute top-3 right-3  ${
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
          className="bg-contain overflow-hidden group-hover:scale-[117%] transition-all duration-500"
        />
      </CardHeader>
      <CardContent className="lg:px-4 lg:pb-4 px-3 pb-3 -mt-5">
        <div className="text-[#8D8D8D] flex items-center gap-2">
          <p className="text-xs md:text-base">1.20 km</p>
          <p className="text-xl lg:text-2xl">•</p>
          <p className="text-xs md:text-base">10-20 menit</p>
        </div>
        <div className="space-y-3">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-secondary ">
            Warung Makan Bu Siti
          </p>

          <div>
            <div className="flex items-center text-[#606060]">
              <span className="size-[30px] relative flex items-center justify-center">
                <RatingStar className="text- lg:size-[18px] text-[#F8C600]" />
              </span>
              <p className="ml-2 text-xs md:text-base">4.5 </p>
              <p className="ml-3 text-xs md:text-base">(100) Ulasan</p>
            </div>
            <p className="text-primary text-sm md:text-base lg:text-lg font-bold mt-3">
              Mulai dari Rp. 15.000
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DisplayMerchant;
