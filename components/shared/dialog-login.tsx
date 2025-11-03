"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import BorderButton from "./border-button";
import GoogleIcon from "../icons/google";
import Mail from "../icons/mail";
interface DialogLoginProps {
  open: boolean;
  onClose: () => void;
}

const DialogLogin = ({ open, onClose }: DialogLoginProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <Image
            src={"/logo.svg"}
            width={96}
            height={96}
            alt="Logo"
            className="mx-auto"
          />
          <DialogTitle className="font-bold text-base lg:text-3xl text-secondary text-center">
            Masuk dulu yuk, biar bisa dukung UMKM favoritmu
          </DialogTitle>
        </DialogHeader>
        <BorderButton
          className="lg:w-100 w-70 mx-auto text-sm md:text-md"
          icon={<GoogleIcon />}
        >
          Lanjut dengan google
        </BorderButton>
        <BorderButton
          className="lg:w-100 w-70 mx-auto text-sm md:text-base"
          icon={<Mail />}
        >
          Lanjut dengan email
        </BorderButton>
        <DialogFooter className="text-center text-xs mt-8">
          Dengan melanjutkan, kamu menyetujui Syarat & Ketentuan kami dan
          mengonfirmasi bahwa kamu telah membaca Kebijakan Privasi dan Cookie
          kami.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLogin;
