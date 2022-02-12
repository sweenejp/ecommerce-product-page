export const discountAndFormatPrice = (price, discount = 1) => {
  return (price * discount).toFixed(2);
};

export const toPercent = (num) => {
  return num * 100;
};
