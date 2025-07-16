import { X, AlertCircle } from "lucide-react";

const AmountInput = ({ amount, onChange, onClear, error, themeClasses }) => {
  return (
    <div className="mb-8">
      <label
        htmlFor="amount"
        className={`block text-sm font-semibold ${themeClasses.text} mb-3`}
      >
        Amount
      </label>
      <div className="relative">
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={onChange}
          placeholder="Enter amount"
          className={`w-full text-2xl font-semibold p-4 border-2 rounded-xl transition-all duration-200 ${
            error
              ? `${themeClasses.errorBg} border-red-500 focus:border-red-500`
              : `${themeClasses.input}`
          } focus:outline-none focus:ring-4 focus:ring-blue-100`}
          aria-label="Amount to convert"
        />
        {amount && (
          <button
            onClick={onClear}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted} hover:${themeClasses.textSecondary} transition-colors p-1`}
            aria-label="Clear amount"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {error && (
        <div
          className={`flex items-center mt-2 ${themeClasses.errorText} text-sm`}
        >
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

export default AmountInput;
