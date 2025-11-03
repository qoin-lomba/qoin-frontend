import type { Component, ComponentType } from "react";
import { HomeIcon } from "@/components/icons/home";
import Spoon from "@/components/icons/spoon";
import Coffee from "@/components/icons/coffee";
import Dish from "@/components/icons/dish";
import NestedLove from "@/components/icons/nested-love";
import { Instagram, MailIcon, Twitter } from "lucide-react";

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

type FooterIconsType = {
  icon: ComponentType<{ className?: string }>;
};

export const FooterIcons: FooterIconsType[] = [
  {
    icon: Instagram,
  },
  {
    icon: MailIcon,
  },
  {
    icon: Twitter,
  },
];

export const FooterContent = [
  {
    title: "Qoin.in",
    content: ["Jelajahi UMKM", "Promo & Diskon", "Artikel", "Top 100 UMKM"],
  },
  {
    title: "Untuk Pengguna",
    content: ["Cara Ambil Pesanan", "Cara Pengantaran", "Poin Qoin"],
  },
  {
    title: "Untuk Merchant",
    content: ["Gabung Jadi Merchant", "Panduan Merchant"],
  },
  {
    title: "Bantuan",
    content: ["Pusat Bantuan", "Kebijakan Privasi", "Syarat & Ketentuan"],
  },
];
