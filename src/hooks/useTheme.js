import { useState } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    bg: isDarkMode
      ? "bg-gray-900"
      : "bg-gradient-to-br from-slate-50 to-blue-50",
    cardBg: isDarkMode
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-100",
    text: isDarkMode ? "text-gray-100" : "text-gray-800",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    input: isDarkMode
      ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-400"
      : "bg-white border-gray-200 text-gray-800 focus:border-blue-500",
    button: isDarkMode
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-blue-600 hover:bg-blue-700",
    navBg: isDarkMode
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-200",
    successBg: isDarkMode
      ? "bg-green-900 border-green-700"
      : "bg-green-50 border-green-200",
    successText: isDarkMode ? "text-green-300" : "text-green-800",
    infoBg: isDarkMode
      ? "bg-blue-900 border-blue-700"
      : "bg-blue-50 border-blue-200",
    infoText: isDarkMode ? "text-blue-300" : "text-blue-800",
    errorBg: isDarkMode
      ? "bg-red-900 border-red-700"
      : "bg-red-50 border-red-200",
    errorText: isDarkMode ? "text-red-300" : "text-red-700",
  };

  return {
    isDarkMode,
    toggleDarkMode,
    themeClasses,
  };
};

export default useTheme;
