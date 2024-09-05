import { createContext, useState, useMemo } from "react";

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState("serif");

  const toggleFont = (e) => {
    setFont(e.target.value);
  };

  const value = useMemo(() => ({ font, toggleFont }), [font]);

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  );
};
