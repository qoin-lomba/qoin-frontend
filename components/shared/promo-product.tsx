import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Store from "../icons/store";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import Discount from "../icons/discount";

const PromoProduct = () => {
  return (
    <Card className="p-0 rounded-[20px] overflow-hidden group hover:box-shadow-lg transition-all duration-300 hover:shadow-primary">
      <CardHeader className="p-0 relative overflow-hidden lg:h-[251px] ">
        <Image
          src={"/images/promo-img.png"}
          alt={"Foto"}
          width={100}
          height={100}
          className="w-full lg:h-[251px] h-full  bg-contain overflow-hidden group-hover:scale-[117%] transition-all duration-500 "
        />

        <Badge className="bg-[linear-gradient(285deg,#FFC684_32.21%,#FFE5AC_54.97%,#FFCE96_74.75%)] absolute text-secondary font-bold mt-4 ml-2 text-base">
          <Discount className="" />
          <p>Hemat 33%</p>
        </Badge>
      </CardHeader>
      <CardContent className="px-4 ">
        <div className="text-[#8D8D8D] flex items-center gap-2">
          <p className="text-xs md:text-base">1.20 km</p>
          <p className="text-2xl">•</p>
          <p className="text-xs md:text-base">10-20 menit</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Store className="text-xs md:text-base w-3" />
            <p className="lg:font-medium text-xs md:text-base text-[#8D8D8D]">
              Warung makan bu siti
            </p>
          </div>
          <CardTitle className="lg:font-medium  text-base md:text-lg lg:text-xl">
            Nasi Goreng Udang
          </CardTitle>
        </div>
        <div className="space-y-1">
          <p className="lg:text-lg lg:font-semibold text-[#8D8D8D]">
            Rp. 30.000
          </p>
          <p className="text-primary lg:font-semibold text-base md:text-lg lg:text-2xl">
            Rp. 24.000
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center mt-[14px]">
          <Progress value={70} className="flex-1 bg-[#E1E1E1]" />
          <p className="text-xs lg:text-sm text-primary font-semibold ">
            7 Tersisa
          </p>
        </div>
      </CardContent>
      <CardAction className="mx-auto pb-4 px-4 w-full">
        <Button className="w-full font-semibold lg:text-xl">
          Beli Sekarang
        </Button>
      </CardAction>
    </Card>
  );
};

export default PromoProduct;
