const range = function (from, to, step) {
  const stepBy = step === undefined ? 1 : step;
  const array = [];

  for (let i = from; i < to; i += stepBy) {
    array.push(i);
  }

  return array;
}

// const range = function (from, to, step) {
//   const stepBy = step === undefined ? 1 : step;
//   return Array.from({length : Math.ceil((to - from) / stepBy)},
//     (_, i) => from + (i * stepBy));
// }

//return all the remainders of the dividend and the divisors in an array using map, we can see is there any factor or not

// const isDivisible = function (dividend) {
//   return range(2, dividend - 1, 1).map(function (x) { return dividend % x });
// }

// const isPrime = function (num) {
//   return [num].map(isDivisible);
// }

//well this one basically says if its a prime or not

//----------------------------approach one--------------------------------------

// const isDivisible = function (dividend, divisor) {
//   return dividend % divisor === 0;
// }

// const reducer = function (primeCandidate, potentialFactor) {
//   if (!isDivisible(primeCandidate, potentialFactor)) {
//     return primeCandidate;
//   }
// }

// const isPrime = function (number) {
//   if (number < 2) {
//     return false;
//   }

//   const potentialFactors = range(2, number);
//   return potentialFactors.reduce(reducer, number) === number;
// }

//------------------------------approach two------------------------------------

const isPrime = function (number) {
  if (number < 2) {
    return false;
  }

  const isNotDivisible = function (potentialFactor) {
    return number % potentialFactor !== 0;
  }

  const potentialFactors = range(2, number);
  // return !potentialFactors.some(isDivisible);
  return potentialFactors.every(isNotDivisible);
}

//------------------------------approach three----------------------------------

// const isDivisible = function (dividend, divisor) {
//   return dividend % divisor === 0;
// }

// const isPrime = function (number) {
//   if (number < 2) {
//     return false;
//   }

//   const getFactor = function (factors, potentialFactor) {
//     if (isDivisible(number, potentialFactor)) {
//       factors.push(potentialFactor);
//     }

//     return factors;
//   }

//   const potentialFactors = range(2, number);
//   const factors = potentialFactors.reduce(getFactor, []);

//   return factors.length === 0;
// }

//------------------------------approach four----------------------------------

// const isPrime = function (number) {
//   if (number < 2) {
//     return false;
//   }

//   const isFactor = function (potentialFactor) {
//     return number % potentialFactor === 0;
//   }

//   const potentialFactors = range(2, number);
//   const listOfBooleans = potentialFactors.map(isFactor);
//   return !listOfBooleans.includes(true);
// }

//---------------------------------testing--------------------------------------

function testPrime (number, expected, table) {
  const actual = isPrime(number);
  const message = actual === expected ? "passed" : "failed";

  table.push([message, number, expected, actual]);
}

function testAll() {
  const table = [];

  testPrime(1, false, table);
  testPrime(2, true, table);
  testPrime(3, true, table);
  testPrime(4, false, table);
  testPrime(5, true, table);
  testPrime(6, false, table);
  testPrime(16, false, table);
  testPrime(25, false, table);
  testPrime(125, false, table);
  testPrime(101, true, table);

  console.table(table)
}

testAll()