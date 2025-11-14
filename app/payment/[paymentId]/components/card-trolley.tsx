"use client";

import Store from "@/components/icons/store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useAddProductToCart from "@/hooks/merchant/use-add-product-to-cart";
import Image from "next/image";
import useGetMerchantById from "@/hooks/merchant/use-get-merchant-by-id";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams, useRouter } from "next/navigation";
import { formatPrice } from "@/lib/format-price";

type CardTrolleyProps = {
  id: string;
  name: string;
  photo_url: string;
  description?: string;
  price: number;
  quantity: number;
  onInc?: (productId: string) => void;
  onDec?: (productId: string) => void;
};

export const CardTrolleyItem = ({
  id,
  name,
  photo_url,
  price,
  quantity,
  description,
  onInc,
  onDec,
}: CardTrolleyProps) => {
  return (
    <>
      <div className="flex">
        <div className="overflow-hidden rounded-[20px]">
          <Image
            className=""
            width={100}
            height={100}
            src={photo_url}
            alt={`Photo ${name}`}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="lg:text-lg text-base font-medium text-[#333]">
              {name}
            </h1>
            <p className="text-[#8D8D8D] text-sm lg:text-base">
              {description ?? "Ini makanan enak banget asli ga boong"}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-end">
              <p className="text-primary lg:text-2xl md:text-xl text-lg font-bold">
                {formatPrice(price)}
              </p>
              <div className="flex items-center justify-end w-full ">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-3 text-white bg-primary hover:bg-primary hover:text-white"
                    onClick={() => onDec?.(id)}
                  >
                    -
                  </Button>
                  <p className="text-sm w-6 text-center">{quantity}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-3 text-white bg-primary hover:bg-primary hover:text-white"
                    onClick={() => onInc?.(id)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CardTrolley = () => {
  const { paymentId } = useParams();
  const { cart, increment, decrement } = useAddProductToCart();
  const { merchant, isLoading } = useGetMerchantById(paymentId as string);
  const router = useRouter();
  const handleBackToMenu = () => {
    return router.push(`/merchant/${paymentId}`);
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-3 items-center">
          <Store className="lg:size-[26px] size-[20px]" />
          {isLoading ? (
            <Skeleton className="w-[200px] h-3" />
          ) : (
            <p className="lg:text-[22px] text-base font-bold text-[#333]">
              {merchant?.name}
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {cart.map((item: CardTrolleyProps) => (
          <CardTrolleyItem
            key={item.id}
            {...item}
            onInc={increment}
            onDec={decrement}
          />
        ))}
        <div className="flex items-center justify-between lg:mt-10 mt-7">
          <div>
            <h1 className="lg:text-[22px] text-base font-bold text-[#333]">
              Masih ada yang mau ditambah?
            </h1>
            <p className="lg:text-lg text-sm font-medium text-[#8D8D8D]">
              Lihat lagi menu lainnya biar gak ada yang terlewat.
            </p>
          </div>
          <Button
            variant={"outline"}
            className="text-primary border-primary hover:text-primary hover:bg-transparent font-bold text-sm lg:text-base"
            onClick={handleBackToMenu}
          >
            Tambah Lagi
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-3">
        <Store className="size-[26px]" />
        <p className="lg:text-[22px] font-bold text-[#333]">{merchant?.name}</p>
      </CardFooter>
    </Card>
  );
};

export default CardTrolley;
