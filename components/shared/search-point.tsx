import { Input } from "../ui/input";
import SearchNormal from "../icons/search-normalized";

const SearchInput = () => {
  return (
    <form className="w-full max-w-[817px] relative mx-auto mt-[30px]">
      <div className="flex relative items-center gap-4">
        <div className="absolute size-[21px] flex items-center px-[25px]">
          <SearchNormal className=" text-gray-400" />
        </div>
        <Input
          className="pl-[45px] py-[30px] border-2 border-[#E1E1E1] text-[20px]"
          placeholder="Mulai ketik di sini…"
        />
      </div>
    </form>
  );
};

export default SearchInput;
