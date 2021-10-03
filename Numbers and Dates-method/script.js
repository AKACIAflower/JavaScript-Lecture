// String to Number

// 1. Conversion
console.log(Number("17"));
console.log(+"17");

// 2. Parsing => the string needs to start with a number
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("ea34"));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

// 3. isNaN -> check if value is NaN
console.log(Number.isNaN(17));
console.log(Number.isNaN("17")); // false
console.log(Number.isNaN(+"20x"));
console.log(Number.isNaN(23 / 0)); // false -> infinity is not a NaN

// 4. isFinite -> the best way to checking if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20x"));
console.log(Number.isFinite(20 / 0));

// 5. isInteger
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// Math method
console.log(Math.sqrt(25));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

// this is a nice function which will give us always a number that's going to stay between min and max.
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// 1. Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9));

// Difference between trunc and floor (negative number) -> floor를 쓰는 것을 더 선호
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// 2. Rounding decimals
console.log((2.7).toFixed(0)); // toFixed returns a string and not a number
console.log((2.7).toFixed(3));

// Check whether a certain number is even or odd
console.log(5 % 2); // 5 is odd number
console.log(6 % 2); // 6 is even number

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(124));

console.log(2 ** 53);
console.log(Number.MAX_SAFE_INTEGER);

// Creating a date

const now = new Date();
console.log(now);

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

// timestamp
console.log(future.getTime());
console.log(new Date(2142224580000));
console.log(Date.now());

// Operations with Dates
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// / (1000 * 60 * 60 * 24) => millisecond 단위를 day 단위로 바꿈.

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);
