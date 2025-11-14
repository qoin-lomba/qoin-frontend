import Cart from "@/components/icons/cart";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import Image from "next/image";

interface ProductItemProps {
  id: string;
  name: string;
  price: number;
  photo_url: string;
  handleProduct: (productId: string) => void;
}

const ProductItem = ({
  id,
  name,
  price,
  photo_url,
  handleProduct,
}: ProductItemProps) => {
  return (
    <div className="flex justify-between items-center w-full border-b pb-4 mb-4 mt-4 gap-2 shadow-md">
      <div className="flex flex-col ">
        <h3 className="font-bold lg:text-2xl text-sm md:text-base text-[#333]">
          {name}
        </h3>
        <p className="lg:text-lg text-xs text-gray-500 max-w-[300px] lg:max-w-[500px] leading-snug my-3">
          Ini makanan enak banget asli ga boong
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-500">★</span>
          <span className="text-[#606060] text-base font-semibold">4.9</span>
          <span className="text-gray-400 text-sm">(10+)</span>
        </div>
        <p className="text-primary font-semibold text-xl mt-1">
          Rp. {formatPrice(price)}
        </p>
      </div>

      <div className="relative size-[155] rounded-lg ">
        <Image
          src={photo_url}
          width={400}
          height={400}
          className="w-full h-full rounded-lg"
          alt={`Foto Produk ${name}`}
        />
        <Button
          onClick={() => handleProduct(id)}
          className="overflow-hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 border-[1.5px] border-primary text-primary rounded-full text-sm font-semibold bg-white !px-0 py-2 group transition-all duration-500"
        >
          {/* LAYER GRADIENT (untuk efek warna bergerak kiri ke kanan) */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

          {/* Konten button */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-all duration-500 group-hover:bg-white group-hover:-translate-x-8">
            <Cart className="text-white group-hover:text-primary w-4 h-4 transition-colors duration-300" />
          </div>

          <p className="relative pl-[7px] pr-3 transition-all duration-300 group-hover:text-white group-hover:-translate-x-4">
            Tambah
          </p>
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
