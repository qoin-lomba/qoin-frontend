import type { ComponentType } from "react";
import { HomeIcon } from "@/components/icons/home";
import Spoon from "@/components/icons/spoon";
import Coffee from "@/components/icons/coffee";
import Dish from "@/components/icons/dish";
import NestedLove from "@/components/icons/nested-love";

type ButtonHeroContentType = {
  title: string;
  icon: ComponentType<{ className?: string }>;
};

export const ButtonHeroContent: ButtonHeroContentType[] = [
  {
    title: "Semua",
    icon: HomeIcon,
  },
  {
    title: "Makanan",
    icon: Spoon,
  },
  {
    title: "Minuman",
    icon: Coffee,
  },
  {
    title: "Jasa",
    icon: Dish,
  },
  {
    title: "Kerajinan",
    icon: NestedLove,
  },
];

export type ProductTypeContentType = {
  title: string;
  img: string;
};

export const ProductTypeContent: ProductTypeContentType[] = [
  {
    title: "Kafe",
    img: "/images/cafe-image.png",
  },
  {
    title: "Jajanan",
    img: "/images/snack-image.png",
  },
  {
    title: "Hobi",
    img: "/images/hobby-image.png",
  },
  {
    title: "Toko Kelontong",
    img: "/images/mini-market-image.png",
  },
];
