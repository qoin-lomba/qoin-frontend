import { ProductTypeContentType } from "@/content/content";
import DisplayProductTypeItem from "./display-product-type-item";
import DisplayMerchant from "./display-merchant";
import PromoProduct from "./promo-product";
import InspiratedItem from "./inspirated-item";
import { DisplayMerchantResponse } from "@/types";

interface ProductSectionProps {
  title?: string;
  description?: string;
  products?: ProductTypeContentType[];
  isExplore?: boolean;
  isPromo?: boolean;
  isInspirated?: boolean;
  displayMerchant?: DisplayMerchantResponse;
  isLoading?: boolean;
}

const ProductSection = ({
  title,
  description,
  products,
  isExplore,
  isPromo,
  isInspirated,
  displayMerchant,
  isLoading,
}: ProductSectionProps) => {
  const safeDisplayMerchant = Array.isArray(displayMerchant?.data)
    ? displayMerchant.data
    : [];

  return (
    <>
      <div className="space-y-3 mt-15 mb-7.5">
        <h1
          className={`lg:text-3xl md:text-2xl text-xl font-extrabold ${
            isPromo ? "text-white" : "text-secondary"
          }`}
        >
          {title}
        </h1>
        <p
          className={` lg:text-[22px] md:text-lg text-base ${
            isPromo ? "text-white" : "text-[#606060]"
          }`}
        >
          {description}
        </p>
      </div>

      {isInspirated && (
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-2 ">
          {Array.from({ length: 3 }).map((_, idx) => (
            <InspiratedItem key={idx} />
          ))}
        </div>
      )}

      {!isInspirated && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-2 ">
          {isExplore &&
            !isLoading &&
            safeDisplayMerchant.map((item, idx) => (
              <DisplayMerchant
                key={idx}
                displayMerchant={item}
                isLoading={isLoading}
              />
            ))}

          {isPromo &&
            Array.from({ length: 4 }).map((_, idx) => (
              <PromoProduct key={idx} />
            ))}

          {!isExplore &&
            !isPromo &&
            products?.map((item, idx) => (
              <DisplayProductTypeItem key={idx} {...item} />
            ))}
        </div>
      )}
    </>
  );
};

export default ProductSection;
