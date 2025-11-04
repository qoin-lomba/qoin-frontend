"use client";

import Header from "@/components/section/header";
import DialogLogin from "@/components/shared/dialog-login";
import useOpenModal from "@/hooks/landing-page/use-open-modal";
import MerchantHeader from "./components/merchant-header";
import MerchantDisplay from "./components/merchant-display";

const MerchantPage = () => {
  const { closeModal, openModal, modalIsOpen } = useOpenModal();
  return (
    <>
      <Header openModal={openModal} />
      <MerchantHeader />
      <MerchantDisplay />
      {modalIsOpen && <DialogLogin onClose={closeModal} open={modalIsOpen} />}
    </>
  );
};

export default MerchantPage;
