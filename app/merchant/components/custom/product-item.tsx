const ProductItem = () => {
  return (
    <div className="flex justify-between items-center w-full border-b pb-4 mb-4 mt-4 gap-2">
      <div className="flex flex-col ">
        <h3 className="font-bold lg:text-lg text-sm md:text-base text-[#333]">
          Ayam Goyeng
        </h3>
        <p className="lg:text-sm text-xs text-gray-500 max-w-[300px] leading-snug my-3">
          Ayam goyeng garing di luar, juicy di dalam. Simpel tapi nikmatnya
          nggak sederhana!
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-500">★</span>
          <span className="text-[#606060] text-base font-semibold">4.9</span>
          <span className="text-gray-400 text-sm">(10+)</span>
        </div>
        <p className="text-primary font-semibold text-xl mt-1">15.000</p>
      </div>

      <div className="relative size-[155] rounded-lg ">
        <div className="bg-gray-200 w-full h-full rounded-lg"></div>

        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center translate-y-2/3 justify-center gap-2 border border-primary text-primary px-4 py-1.5 rounded-full text-sm font-semibold bg-white">
          Tambah
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
