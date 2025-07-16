import { ArrowUpDown } from "lucide-react";
import currencies from "../data/Currencies.jsx";

const CurrencySelector = ({
  sourceCurrency,
  targetCurrency,
  onSourceChange,
  onTargetChange,
  onSwap,
  themeClasses,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="space-y-2">
        <label
          htmlFor="source"
          className={`block text-sm font-semibold ${themeClasses.text}`}
        >
          From
        </label>
        <select
          id="source"
          value={sourceCurrency}
          onChange={onSourceChange}
          className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium ${themeClasses.input}`}
          aria-label="Source currency"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-end justify-center md:justify-center">
        <button
          onClick={onSwap}
          className={`${themeClasses.button} text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg`}
          aria-label="Swap currencies"
        >
          <ArrowUpDown className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="target"
          className={`block text-sm font-semibold ${themeClasses.text}`}
        >
          To
        </label>
        <select
          id="target"
          value={targetCurrency}
          onChange={onTargetChange}
          className={`w-full p-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium ${themeClasses.input}`}
          aria-label="Target currency"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencySelector;
