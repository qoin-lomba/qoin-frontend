import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Star from "../icons/star";
import { Badge } from "../ui/badge";
import Like from "../icons/like-icon";

const CommentCard = () => {
  return (
    <Card className="w-[437px]  ">
      <CardHeader className="flex items-center gap-4 px-5">
        <div className="relative w-[58px] h-[58px] rounded-full overflow-hidden">
          <Image
            src="/images/profile-img.png"
            alt="Comment"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Andi Prasetyo</h1>
          <p className="text-sm text-gray-500">2 Hari yang Lalu</p>
        </div>
      </CardHeader>

      <CardContent className="px-5">
        <div className="flex justify-between pb-[14px]">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} />
            ))}
          </div>
          <div>
            <Badge className="text-secondary border-[#FFD6A7] bg-[#FFF7ED] px-3 py-2 font-bold">
              Warung Makan Bu Siti
            </Badge>
          </div>
        </div>
        <p className="font-medium text-[#606060]">
          Makanannya enak banget! Rasanya kayak masakan rumah sendiri. Porsi
          banyak, harga terjangkau. Poin Qoin-nya juga bikin makin hemat
          belanja! Recommended banget deh 🔥
        </p>
        <div className="w-full h-[1px] bg-[#E1E1E1] my-[14px] flex items-center justify-center" />
        <CardFooter className="px-0 flex gap-3 ">
          <Like />
          <p className="text-[#606060] font-semibold">45</p>
          <p className="font-medium text-[#8D8D8D]">Orang merasa terbantu</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
