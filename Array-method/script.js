// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Array method practice

// 1. Find bank deposit sum
const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur);

// Make the above variable simpler
const bankDepositSum1 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum, bankDepositSum1);

// 2. Find the number of deposits over $1,000

// 2-1. Way 1
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

// console.log(numDeposits1000);

// 2-2. Way 2
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3. Make the sum of deposits and the sum of withdrawals into an object form.
// 3-1. Way 1
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 3-2. Way 2
const sums1 = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums1);

// Challenge 1
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  console.log(titleCase);
};

convertTitleCase("and this and is a nice title");

// Challenge 2
const dogs = [
  { weight: 22, curFood: 250, owner: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owner: ["Matilda"] },
  { weight: 13, curFood: 275, owner: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owner: ["Michael"] },
];

// 1. dogs에 recFood 추가하기
dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2. Sarah의 개가 많이 먹은지 적게 먹은지 확인
const dogSarah = dogs.find((dog) => dog.owner.includes("Sarah"));

console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3. 추천보다 더 많은 양을 먹은 개와 더 적은 양을 먹은 개를 소유한 주인들 찾기
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owner);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owner);
console.log(ownersEatTooLittle);

// 4. 추천과 같은 양을 먹은 개가 있는지 확인
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 5. 적정량을 먹은 개들을 모아놓은 배열 만들기 (적정량 : 먹은 양의 90%보다 크고 110%보다 작음.)
const checkEatingOkay = (dog) =>
  dog.recFood * 0.9 < dog.curFood && dog.recFood * 1.1 > dog.curFood;

const eatingOkayDogs = dogs.filter(checkEatingOkay);
console.log(eatingOkayDogs);

// 6. 추천된 양의 크기가 증가하는 순서로 정렬하기
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
