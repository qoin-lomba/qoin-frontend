import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TabsProduct from "./tabs-products";
import TabsAbout from "./tabs-about";
import TabsReview from "./tabs-review";
import React from "react";
import Box from "@/components/icons/box";
import Store from "@/components/icons/store";
import Star from "@/components/icons/star";

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

const TabsDisplay = () => {
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
          <TabsContent value="products">
            <TabsProduct />
          </TabsContent>
          <TabsContent value="abouts">
            <TabsAbout />
          </TabsContent>
          <TabsContent value="reviews">
            <TabsReview />
          </TabsContent>
        </div>
      </Tabs>

      <div className="col-span-3 lg:col-span-1">testing</div>
    </div>
  );
};

export default TabsDisplay;
