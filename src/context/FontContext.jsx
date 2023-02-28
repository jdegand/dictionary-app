import { createContext, useState } from "react";

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState("serif");

  const toggleFont = (e) => {
    setFont(e.target.value);
  };

  return (
    <FontContext.Provider value={{ font, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
};
