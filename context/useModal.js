import React, { useContext } from "react";
import { ModalContext } from "./ModalProvider";

const useModal = () => {
  const contextValue = useContext(ModalContext);
  return contextValue;
};

export default useModal;
