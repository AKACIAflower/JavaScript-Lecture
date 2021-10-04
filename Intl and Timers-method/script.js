// Internationalizing Dates (Intl)
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const locale = navigator.language;
const content1 = new Intl.DateTimeFormat("en-US", options).format(now);
const content2 = new Intl.DateTimeFormat("en-GB", options).format(now);
const content3 = new Intl.DateTimeFormat(locale, options).format(now);

console.log(content1);
console.log(content2);
console.log(content3);

// Internationalizing Numbers (Intl)
const num = 4534535.23;

const option = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};

console.log("US:   ", new Intl.NumberFormat("en-US", option).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(num)
);

// setTimeout
setTimeout(() => console.log("Here is your pizza 🍕"), 3000);
console.log("Waiting"); // 'Waiting'이 먼저 출력됨.

const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now2 = new Date();
  console.log(now2);
}, 1000);
