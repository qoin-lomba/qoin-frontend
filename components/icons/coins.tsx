"use client";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Coins({ className }: Props) {
  return (
    <Image
      src="/images/coins.png"
      alt="Coins"
      width={160}
      height={160}
      className={className ?? ""}
      priority
    />
  );
}
