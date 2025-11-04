"use client";
import Check from "@/components/icons/check";
import FluentChat from "@/components/icons/fluent-chat";
import LocationIcon from "@/components/icons/location";
import RatingStar from "@/components/icons/rating-star";
import PageContainer from "@/components/shared/page-container";
import Section from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import useClickLike from "@/hooks/landing-page/use-click-like";
import { Heart } from "lucide-react";
import Image from "next/image";

type MerchantInfo = {
  amount: number | string;
  text: string;
};

const merchantInfo: MerchantInfo[] = [
  { amount: 10, text: "Produk" },
  { amount: 370, text: "Terjual" },
  { amount: "11.8RB", text: "Pengikut" },
];

const MerchantHeader = () => {
  const { isLiked, toggleLike } = useClickLike();
  return (
    <Section className="!px-0">
      <PageContainer>
        <div className="relative lg:grid grid-cols-2">
          <Image
            src={"/images/merchant-image.png"}
            alt="Merchant image"
            className="w-full h-[220px] md:h-[260px] lg:h-[300px] lg:w-[738px] object-cover lg:rounded-3xl"
            width={1200}
            height={300}
            priority
          />

          <div className="absolute inset-x-0 -bottom-10 flex justify-center px-4 lg:static">
            <div className="w-full max-w-xl rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] px-4 py-3  gap-3">
              <div className="flex items-center justify-between lg:w-full">
                <div className="lg:flex flex-col-reverse lg:w-full">
                  <div>
                    <h1 className="text-xl md:text-2xl lg:text-[30px] font-extrabold line-clamp-2 text-[#333]">
                      Warung Makan Bu Siti
                    </h1>
                    <div className="lg:flex hidden items-center gap-2 ">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx} className="hidden lg:inline-block">
                          <RatingStar className="text-yellow-400" />
                        </span>
                      ))}
                      <h1 className="text-[#333] lg:text-[22px] md:text-lg text-base font-semibold">4.9</h1>
                    </div>
                  </div>

                  <div className="space-x-2 relative w-full font-semibold">
                    <Badge className="bg-[#FFF7ED] border-primary text-primary lg:px-3 lg:py-2">
                      <LocationIcon className="text-transparent " />
                      <p className="text-xs lg:text-base font-semibold">
                        2 km dari lokasimu
                      </p>
                    </Badge>
                    <Badge className="border border-[#7BF1A8] bg-[#E6FFEF] text-[#027A48] lg:px-3 lg:py-2 mt-2">
                      <Check />
                      <p className="text-xs lg:text-base font-semibold">
                        Terverifikasi
                      </p>
                    </Badge>
                    <div
                      className={`size-10 absolute top-3 right-0  ${
                        isLiked ? "bg-primary" : "bg-[#FFD6A7]"
                      } rounded-full hidden items-center justify-center z-100 lg:flex  `}
                      onClick={toggleLike}
                    >
                      <Heart
                        className={`transition duration-300 ${
                          isLiked
                            ? "text-[#FFD6A7] fill-current"
                            : "text-primary"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-primary rounded-lg border shadow-md lg:hidden">
                  <div className="flex items-center justify-center gap-2 font-bold text-white px-3 py-1 shrink-0">
                    <p className="text-sm lg:text-base">4,8</p>
                    <RatingStar className="text-yellow-400" />
                  </div>
                  <div className="bg-white gap-1 flex items-center p-1">
                    <FluentChat className="size-3 text-[#808080] " />
                    <p className="text-xs">128 ulasan</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around lg:justify-start lg:gap-[85px] mt-4">
                {merchantInfo.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <h1 className="lg:text-[25px] text-[20px] font-bold text-primary">
                      {item.amount}
                    </h1>
                    <p className="text-[#8D8D8D]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
};

export default MerchantHeader;
