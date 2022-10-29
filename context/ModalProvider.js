import { createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  console.log("Contexto Modal");

  const contextValue = {};

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
