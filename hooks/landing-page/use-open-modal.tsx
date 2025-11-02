"use client";

import { useState } from "react";

const useOpenModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
};

export default useOpenModal;
