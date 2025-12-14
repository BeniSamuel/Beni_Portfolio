import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ColorTheme = 'red' | 'green' | 'blue' | 'orange';
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  colorTheme: ColorTheme;
  themeMode: ThemeMode;
  setColorTheme: (theme: ColorTheme) => void;
  toggleThemeMode: () => void;
  getThemeColor: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorThemes: Record<ColorTheme, string> = {
  red: '#ED2929',
  green: '#22C55E',
  blue: '#3B82F6',
  orange: '#F97316',
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem('colorTheme') as ColorTheme;
    return saved || 'red';
  });

  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode') as ThemeMode;
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme);
    localStorage.setItem('themeMode', themeMode);
    
    // Apply theme mode to document
    document.documentElement.classList.toggle('light-mode', themeMode === 'light');
    document.documentElement.classList.toggle('dark-mode', themeMode === 'dark');
    
    // Update CSS variable for theme color
    document.documentElement.style.setProperty('--theme-color', colorThemes[colorTheme]);
  }, [colorTheme, themeMode]);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
  };

  const toggleThemeMode = () => {
    setThemeModeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const getThemeColor = () => {
    return colorThemes[colorTheme];
  };

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        themeMode,
        setColorTheme,
        toggleThemeMode,
        getThemeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
