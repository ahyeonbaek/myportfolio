import { createContext, useEffect, useState } from "react";

interface ModeContextProps {
  onClickIsDark: () => void;
  isDark: boolean;
}

export const DarkModeContext = createContext<ModeContextProps>({
  onClickIsDark: () => {},
  isDark: false,
});

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const onClickIsDark = () => {
    setIsDark((prev) => !prev);
  };

  useEffect;
  return (
    <DarkModeContext.Provider value={{ onClickIsDark, isDark }}>
      <div>{children}</div>
    </DarkModeContext.Provider>
  );
};
