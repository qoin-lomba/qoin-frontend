import { TabsContent } from "@/components/ui/tabs";
import ProductItem from "./product-item";

const TabsProduct = () => {
  return (
    <TabsContent value="products" className="">
      <div className="">
        <h1 className="text-[#333] font-semibold lg:text-xl md:text-lg text-base">
          Menu Populer
        </h1>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductItem key={index} />
        ))}
      </div>
    </TabsContent>
  );
};

export default TabsProduct;
