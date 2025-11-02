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
          <DialogTitle className="font-bold text-3xl text-secondary text-center">
            Masuk dulu yuk, biar bisa dukung UMKM favoritmu
          </DialogTitle>
        </DialogHeader>
        <BorderButton className="w-100 mx-auto" icon={<GoogleIcon />}>
          Lanjut dengan google
        </BorderButton>
        <BorderButton className="w-100 mx-auto" icon={<Mail />}>
          Lanjut dengan email
        </BorderButton>
        <DialogFooter className="text-center mt-8">
          Dengan melanjutkan, kamu menyetujui Syarat & Ketentuan kami dan
          mengonfirmasi bahwa kamu telah membaca Kebijakan Privasi dan Cookie
          kami.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLogin;
