import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const toggleTheme = (e) => {
    setChecked((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ checked, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
