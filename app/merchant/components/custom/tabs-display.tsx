"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsProduct from "./tabs-products";
import TabsAbout from "./tabs-about";
import TabsReview from "./tabs-review";
import React from "react";
import Box from "@/components/icons/box";
import Store from "@/components/icons/store";
import Star from "@/components/icons/star";
import AsideCard from "./aside-card";
import CartCard from "./cart-card";
import { Merchant } from "@/types";
import type { CartItem } from "@/hooks/merchant/use-add-product-to-cart";

type TabConfig = {
  value: string;
  text: string;
  icon: React.ReactElement;
};

const tabsConfig: TabConfig[] = [
  { value: "products", text: "Produk", icon: <Box /> },
  { value: "abouts", text: "Tentang", icon: <Store /> },
  { value: "reviews", text: "Ulasan", icon: <Star /> },
];
interface TabsDisplayProps {
  merchant?: Merchant | null;
  handleProduct: (productId: string) => void;
  cart: CartItem[];
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  totals: { totalQty: number; totalPrice: number };
}

const TabsDisplay = ({
  merchant,
  handleProduct,
  cart,
  increment,
  decrement,
  totals,
}: TabsDisplayProps) => {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <Tabs defaultValue="products" className="col-span-3 lg:col-span-2">
        <TabsList className="grid w-full grid-cols-3">
          {tabsConfig.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
          flex w-full items-center justify-center gap-2
          text-[#808080]
          border-b-2 border-transparent
          data-[state=active]:text-primary
          data-[state=active]:border-primary
          transition-none
              "
            >
              {tab.icon}
              <span>{tab.text}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-6">
          <TabsProduct
            product={merchant?.stocks}
            handleProduct={handleProduct}
          />
          <TabsAbout />
          <TabsReview />
        </div>
      </Tabs>
      <div className="grid grid-cols-4 col-span-3 lg:col-span-1 lg:space-y-4">
        <AsideCard className="col-span-4 h-100 " />
        <CartCard
          className="col-span-4"
          cart={cart}
          increment={increment}
          decrement={decrement}
          totals={totals}
        />
      </div>
    </div>
  );
};

export default TabsDisplay;
