import pkg from "cebrify";

import data from "./data/data.js";

const {
  calcBMI,
  togglerStatus,
  togglerBoolean,
  averageRatingCalc,
  exchangeRate,
} = pkg;

console.log(pkg.togglerStatus("see", "development", "see"));

console.log(pkg.togglerBoolean(true));

console.log(pkg.calcBMI(76, 1.72));

pkg.averageRatingCalc(data.products);

console.log(pkg.exchangeRate(200, 1.14, "EUR", "USD"));
