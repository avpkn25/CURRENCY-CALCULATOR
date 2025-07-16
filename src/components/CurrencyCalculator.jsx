import { useState, useEffect } from "react";
import AmountInput from "./AmountInput.jsx";
import CurrencySelector from "./CurrencySelector.jsx";
import ConversionResult from "./ConversionResult.jsx";
import fetchExchangeRate from "../utils/exchangeRateService.jsx";
import { validateAmount } from "../utils/validation.jsx";

const CurrencyCalculator = ({ themeClasses }) => {
  const [amount, setAmount] = useState("1");
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState(null);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    const error = validateAmount(value);
    setInputError(error);
  };

  const clearAmount = () => {
    setAmount("");
    setInputError(null);
    setConvertedAmount(null);
  };

  const swapCurrencies = () => {
    const temp = sourceCurrency;
    setSourceCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  useEffect(() => {
    const performConversion = async () => {
      setError(null);
      setConvertedAmount(null);
      setExchangeRate(null);

      const amountError = validateAmount(amount);
      if (amountError || !amount || amount === "") {
        return;
      }

      const numAmount = parseFloat(amount);
      if (isNaN(numAmount)) {
        return;
      }

      setIsLoading(true);

      try {
        const rate = await fetchExchangeRate(sourceCurrency, targetCurrency);
        setExchangeRate(rate);

        const result = numAmount * rate;
        setConvertedAmount(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    performConversion();
  }, [amount, sourceCurrency, targetCurrency]);

  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold ${themeClasses.text} mb-2`}>
            Currency Calculator
          </h1>
          <p className={`${themeClasses.textSecondary} text-lg`}>
            Convert currencies with real-time exchange rates
          </p>
        </div>

        <div
          className={`${themeClasses.cardBg} rounded-2xl shadow-xl p-6 md:p-8 border transition-colors duration-300`}
        >
          <AmountInput
            amount={amount}
            onChange={handleAmountChange}
            onClear={clearAmount}
            error={inputError}
            themeClasses={themeClasses}
          />

          <CurrencySelector
            sourceCurrency={sourceCurrency}
            targetCurrency={targetCurrency}
            onSourceChange={(e) => setSourceCurrency(e.target.value)}
            onTargetChange={(e) => setTargetCurrency(e.target.value)}
            onSwap={swapCurrencies}
            themeClasses={themeClasses}
          />

          <ConversionResult
            isLoading={isLoading}
            error={error}
            exchangeRate={exchangeRate}
            convertedAmount={convertedAmount}
            amount={amount}
            sourceCurrency={sourceCurrency}
            targetCurrency={targetCurrency}
            themeClasses={themeClasses}
          />
        </div>

        <div className="text-center mt-8">
          <p className={`${themeClasses.textMuted} text-sm`}>
            Exchange rates are simulated for demonstration purposes
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
