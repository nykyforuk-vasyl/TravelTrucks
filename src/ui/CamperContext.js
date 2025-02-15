import { createContext, useContext } from "react";

const CamperContext = createContext();

export const useCamper = () => useContext(CamperContext);

export const CamperProvider = ({ children, value }) => (
  <CamperContext.Provider value={value}>{children}</CamperContext.Provider>
);
