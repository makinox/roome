import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
  isDark: false,
  HandleIsDark: () => {},
});

export const AppProvider = ({ children }: { children: any }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  function HandleIsDark(): void {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    setIsDark(Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        HandleIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
