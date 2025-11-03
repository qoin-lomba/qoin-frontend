"use client";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function ShoppingBag({ className }: Props) {
  return (
    <Image
      src="/images/shopping-bag.png"
      alt="Shopping bag"
      width={180}
      height={180}
      className={className ?? ""}
      priority
    />
  );
}
