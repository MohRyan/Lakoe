// export const currencyFormatter(value: number) => new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "IDR",
//   maximumFractionDigits: 0,
// }).format(value);

export const currencyFormatter = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
};
