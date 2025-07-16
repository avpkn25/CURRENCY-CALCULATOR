import Navbar from "./components/Navbar.jsx";
import CurrencyCalculator from "./components/CurrencyCalculator.jsx";
import useTheme from "./hooks/useTheme.js";

function App() {
  const { isDarkMode, toggleDarkMode, themeClasses } = useTheme();

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} font-['Inter'] transition-colors duration-300`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        themeClasses={themeClasses}
      />
      <CurrencyCalculator themeClasses={themeClasses} />
    </div>
  );
}

export default App;
