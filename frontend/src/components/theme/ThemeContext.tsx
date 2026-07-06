import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export type ThemeContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeContextState = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
