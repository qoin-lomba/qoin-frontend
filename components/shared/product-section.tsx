import { ProductTypeContentType } from "@/content/content";
import DisplayProductTypeItem from "./display-product-type-item";
import DisplayMerchant from "./display-merchant";
import PromoProduct from "./promo-product";

interface ProductSectionProps {
  title?: string;
  description?: string;
  products?: ProductTypeContentType[];
  isExplore?: boolean;
  isPromo?: boolean;
}

const ProductSection = ({
  title,
  description,
  products,
  isExplore,
  isPromo,
}: ProductSectionProps) => {
  return (
    <>
      <div className="space-y-3 mt-15 mb-7.5">
        <h1
          className={`text-3xl font-extrabold ${
            isPromo ? "text-white" : "text-secondary"
          }`}
        >
          {title}
        </h1>
        <p
          className={` text-[22px] ${
            isPromo ? "text-white" : "text-[#606060]"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-2 ">
        {isExplore &&
          Array.from({ length: 4 }).map((_, idx) => (
            <DisplayMerchant key={idx} />
          ))}

        {isPromo &&
          Array.from({ length: 4 }).map((_, idx) => <PromoProduct key={idx} />)}

        {!isExplore &&
          !isPromo &&
          products?.map((item, idx) => (
            <DisplayProductTypeItem key={idx} {...item} />
          ))}
      </div>
    </>
  );
};

export default ProductSection;
