//square all elements of an array, get an array with the even elements and then return their sum

// const arr = (prompt('Enter the array elements').split(' ')); this is cool

const arr = [1, 2, 3, 4, 5];
console.log('Initial array: ', arr);

const square = function (value) {
  return value ** 2;
}

const squared = arr.map(square);
console.log('Array after squaring elements: ', squared);

const isEven = function (number) {
  return number % 2 === 0;
}

const even = squared.filter(isEven);
console.log('Array after filtering out odd: ', even);

const sum = function (numberOne, numberTwo) {
  return numberOne + numberTwo; //the return value becomes the new accumulator
}

const summedUp = even.reduce(sum, 0);
console.log('Array after adding evens: ', summedUp);