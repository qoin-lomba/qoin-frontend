import { useState } from "react";
import { Input } from "../ui/input";
import SearchNormal from "../icons/search-normalized";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

const SearchInput = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <form className="w-full max-w-[817px] relative mx-auto mt-[30px]">
        <div className="flex relative items-center gap-4">
          <div className="absolute size-[21px] flex items-center px-[25px]">
            <SearchNormal className=" text-gray-400" />
          </div>
          <Input
            className="pl-[45px] py-[30px] border-2 border-[#E1E1E1] text-[20px] cursor-pointer"
            placeholder="Mulai ketik di sini…"
            onFocus={handleOpen}
            onClick={handleOpen}
            readOnly
          />
        </div>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-[90vw]">
          <DialogHeader>
            <DialogTitle>Cari rekomendasi dengan Qoin Assistant</DialogTitle>
            <DialogDescription>
              Ini contoh percakapan statis. Nantinya bisa disambungkan ke
              chatbot sesungguhnya.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto">
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-foreground max-w-[80%]">
                Hai! Mau cari tempat apa hari ini?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-white max-w-[80%]">
                Aku mau cari bakso yang enak di sekitar sini.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-foreground max-w-[80%]">
                Siap! Coba cek beberapa rekomendasi bakso favorit di sekitar
                kamu di bawah ini ya.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-xs text-foreground/70 max-w-[80%]">
                (Percakapan ini masih statis hanya untuk ilustrasi pengalaman
                chatbot.)
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="text-sm text-primary underline underline-offset-2"
            >
              Tutup
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchInput;
