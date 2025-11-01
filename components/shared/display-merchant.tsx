"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Heart } from "lucide-react";
import useClickLike from "@/hooks/landing-page/use-click-like";
import RatingStar from "../icons/rating-star";

const DisplayMerchant = () => {
  const { isLiked, toggleLike } = useClickLike();

  return (
    <Card className="p-0 rounded-[20px] overflow-hidden group hover:box-shadow-lg transition-all duration-300 hover:shadow-primary">
      <CardHeader className="!p-0 relative overflow-hidden size-[304px]">
        <div
          className={`size-10 absolute top-6 right-16 ${
            isLiked ? "bg-primary" : "bg-[#FFD6A7]"
          } rounded-full flex items-center justify-center z-100`}
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
          className=" bg-cover overflow-hidden group-hover:scale-[117%] transition-all duration-500"
        />
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <Badge className="bg-[#FFF2D9] text-secondary text-lg">
          Jakarta Selatan
        </Badge>
        <div className="space-y-3">
          <p className="text-2xl font-semibold text-primary ">
            Warung Makan Bu Siti
          </p>

          <p className="text-[#606060] text-lg font-medium ">
            Warung makan tradisional dengan menu masakan rumahan yang lezat dan
            harga...
          </p>
          <div>
            <div className="flex items-center text-[#606060]">
              <span className="size-[30px] relative flex items-center justify-center">
                <RatingStar className="w-[18px] h-[18px] text-[#F8C600]" />
              </span>
              <p className="ml-2">4.5 </p>
              <p className="ml-3">(100) Ulasan</p>
            </div>
            <p className="text-secondary text-lg font-bold mt-3">
              Mulai dari Rp. 15.000
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DisplayMerchant;
