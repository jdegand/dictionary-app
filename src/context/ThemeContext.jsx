import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const toggleTheme = () => {
    setChecked((prev) => !prev);
  };

  const value = useMemo(() => ({ checked, toggleTheme }), [checked]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
