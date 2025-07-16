const validateAmount = (value) => {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  const numValue = parseFloat(value);

  if (isNaN(numValue)) {
    return "Please enter a valid number";
  }

  if (numValue < 0) {
    return "Amount cannot be negative";
  }

  if (numValue > 999999999) {
    return "Amount is too large";
  }

  return null;
};

const formatCurrency = (value, currencyCode) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(value);
};

export { validateAmount, formatCurrency };
