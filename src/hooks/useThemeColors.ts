import { useTheme } from "../context/ThemeContext";

export const useThemeColors = () => {
  const { getThemeColor, themeMode } = useTheme();
  const themeColor = getThemeColor();

  // Convert hex to rgb for rgba usage
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 237, g: 41, b: 41 };
  };

  const rgb = hexToRgb(themeColor);
  const rgba = (opacity: number) =>
    `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

  return {
    themeColor,
    rgba,
    themeMode,
    isDark: themeMode === "dark",
    isLight: themeMode === "light",
  };
};
