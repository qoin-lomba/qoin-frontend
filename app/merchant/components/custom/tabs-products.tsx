import { TabsContent } from "@/components/ui/tabs";
import ProductItem from "./product-item";
import { Stock } from "@/types";

interface TabsProductProps {
  product?: Stock[] | null;
  handleProduct: (productId: string) => void;
}
const TabsProduct = ({ product, handleProduct }: TabsProductProps) => {
  return (
    <TabsContent value="products" className="">
      <div>
        <h1 className="text-[#333] font-semibold lg:text-xl md:text-lg text-base">
          Menu Populer
        </h1>
        {product?.length === 0 && (
          <p className="text-sm text-muted-foreground mt-4">
            Produk tidak tersedia
          </p>
        )}
        {product?.length !== 0 &&
          product?.map((item, idx) => (
            <ProductItem {...item} key={idx} handleProduct={handleProduct} />
          ))}
      </div>
    </TabsContent>
  );
};

export default TabsProduct;
