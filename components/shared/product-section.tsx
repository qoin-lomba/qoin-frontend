import { ProductTypeContentType } from "@/content/content";
import DisplayProductTypeItem from "./display-product-type-item";
import DisplayMerchant from "./display-merchant";

interface ProductSectionProps {
  title?: string;
  description?: string;
  products?: ProductTypeContentType[];
  isExplore?: boolean;
}

const ProductSection = ({
  title,
  description,
  products,
  isExplore,
}: ProductSectionProps) => {
  return (
    <>
      <div className="space-y-3 mt-15 mb-7.5">
        <h1 className="text-3xl font-extrabold text-secondary">{title}</h1>
        <p className="text-[#606060] text-[22px]">{description}</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-2 ">
        {!isExplore ? (
          products?.map((item, idx) => (
            <DisplayProductTypeItem key={idx} {...item} />
          ))
        ) : (
          <>
            {Array.from({ length: 4 }).map((_, idx) => (
              <DisplayMerchant key={idx} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ProductSection;
