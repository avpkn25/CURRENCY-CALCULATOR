import mockExchangeRates from "../data/ExchangeRates";

const fetchExchangeRate = async (source, target) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 500 + 300;

    setTimeout(() => {
      try {
        if (source === target) {
          resolve(1.0);
          return;
        }

        const rateKey = `${source}-${target}`;
        const reverseRateKey = `${target}-${source}`;

        if (mockExchangeRates[rateKey]) {
          resolve(mockExchangeRates[rateKey]);
        } else if (mockExchangeRates[reverseRateKey]) {
          resolve(1 / mockExchangeRates[reverseRateKey]);
        } else {
          const sourceToUSD =
            mockExchangeRates[`${source}-USD`] ||
            1 / (mockExchangeRates[`USD-${source}`] || 1);
          const targetToUSD =
            mockExchangeRates[`${target}-USD`] ||
            1 / (mockExchangeRates[`USD-${target}`] || 1);

          if (sourceToUSD && targetToUSD) {
            const crossRate = sourceToUSD / targetToUSD;
            resolve(parseFloat(crossRate.toFixed(6)));
          } else {
            const baseRate = 0.8 + Math.random() * 1.4;
            resolve(parseFloat(baseRate.toFixed(4)));
          }
        }
      } catch (err) {
        reject(new Error("Unable to fetch exchange rate. Please try again."));
      }
    }, delay);
  });
};

export default fetchExchangeRate;
