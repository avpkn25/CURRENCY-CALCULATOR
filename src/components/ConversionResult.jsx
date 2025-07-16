import { Loader2, AlertCircle } from "lucide-react";
import { formatCurrency } from "../utils/validation.jsx";

const ConversionResult = ({
  isLoading,
  error,
  exchangeRate,
  convertedAmount,
  amount,
  sourceCurrency,
  targetCurrency,
  themeClasses,
}) => {
  return (
    <div className="space-y-6">
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-3" />
          <span className={`${themeClasses.textSecondary} font-medium`}>
            Getting exchange rate...
          </span>
        </div>
      )}

      {error && (
        <div className={`${themeClasses.errorBg} border-2 rounded-xl p-4`}>
          <div className={`flex items-center ${themeClasses.errorText}`}>
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">{error}</span>
          </div>
        </div>
      )}

      {exchangeRate && !isLoading && !error && (
        <div className={`${themeClasses.infoBg} border-2 rounded-xl p-4`}>
          <div className="text-center">
            <p className={`${themeClasses.infoText} font-medium`}>
              1 {sourceCurrency} = {exchangeRate.toFixed(4)} {targetCurrency}
            </p>
            <p className={`${themeClasses.textSecondary} text-sm mt-1`}>
              Current exchange rate
            </p>
          </div>
        </div>
      )}

      {convertedAmount && !isLoading && !error && (
        <div className={`${themeClasses.successBg} border-2 rounded-xl p-6`}>
          <div className="text-center">
            <div
              className={`text-3xl font-bold ${themeClasses.successText} mb-2`}
            >
              {formatCurrency(convertedAmount, targetCurrency)}
            </div>
            <p className={`${themeClasses.textSecondary} font-medium`}>
              {formatCurrency(parseFloat(amount), sourceCurrency)} →{" "}
              {targetCurrency}
            </p>
          </div>
        </div>
      )}

      {!amount && !isLoading && !error && (
        <div className="text-center py-8">
          <p className={`${themeClasses.textMuted} font-medium`}>
            Enter an amount to see the conversion
          </p>
        </div>
      )}
    </div>
  );
};

export default ConversionResult;
