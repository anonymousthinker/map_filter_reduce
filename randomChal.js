// Write a function that takes an array and reverses it without using .reverse. Use reduce
// const reducer = function (init, element) {
//   init.unshift(element);
//   return init;
// }

// const reverse = function (array) {
//   return array.reduce(reducer, []);
// }

//---------------------------------OR-------------------------------------------

// const reducer = function (init, element) {
//   return element + " " + init;
// }

// const reverse = function (array) {
//   const ar = array.reduce(reducer, "").split(" ");
//   ar.pop();
//   return ar;
// }
// console.log(reverse([1, 2, 3, 4]));

//----------------------------string reverse------------------------------------

// const reverse = function (init, char) {
//   return char + init;
// }

// const gnirts = function (string) {
//   const array = Array.from(string);
//   return array.reduce(reverse, '');
// }

// console.log(gnirts('gour adhikary'));

//-------------------------------nth fibonacci----------------------------------
const range = function (from, to, step) {
	return Array.from(
    {length : Math.ceil((to - from)/step)}, (_, i) => from + (i * step)
  );
} 

const getTerm = function (fibArray, rangeElement) {
  if (rangeElement === 0 || rangeElement === 1) {
    fibArray.push(rangeElement);
    return fibArray;
  }

  fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);
  return fibArray;
}


// const fibonacci = function (nth) {
//   const fibArr = [];
//   range(0, nth).reduce(getTerm, fibArr);
//   return fibArr[fibArr.length - 1];
// }

const againGetTerm = function (fibArray) {
  [fibArray[0], fibArray[1]] = [fibArray[1], fibArray[0] + fibArray[1]];

  return fibArray;
}

const fibonacci = function (nth) {
  const fibArray = [0, 1];

  if (nth < 3) {
    return nth === 1 ? fibArray[0] : fibArray[1];
  }

  range(3, nth).reduce(againGetTerm, fibArray);
  return fibArray[fibArray.length - 1];
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));

//-----------------------second highest number in array-------------------------

// const secondPlace = function (array) {
//   const largest = Math.max(...array);

//   const secondHighest = function (valueOne, valueTwo) {
//     if (valueTwo === largest) {
//       return valueOne;
//     }

//     return Math.max(valueOne, valueTwo);
//   }

//   return array.reduce(secondHighest, -Infinity);
// }

//----------------------------------OR------------------------------------------

//[1, 2, 3, 4] //4 4 - 1 4 - 2 4 - 3 least difference!

// const secondPlace = function (array) {
//   const highest = Math.max(...array);
  
//   const least = function (difference, element) {
//     if (element === highest) {
//       return difference;
//     }

//     const currDiff = highest - element;

//     if (difference > currDiff) {
//       return currDiff;
//     }

//     return difference;
//   }
 
//   return highest - array.reduce(least, Infinity);
// }

// console.log(secondPlace([4]));

//----------------------------------OR------------------------------------------

//[1, 2, 3, 4] //4 4 - 1 4 - 2 4 - 3 least difference!

const secondPlace = function (array) {
    
}

console.log(secondPlace([1]));
console.log(secondPlace([1, 2]));
console.log(secondPlace([1, 2, 3]));

//-----------------------------reverse fibonacci--------------------------------

const reverseTerms = function (fibArray, element) {
  if (element === 0 || element === 1) {
    fibArray.push(element);
    return fibArray;
  }

  fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);
  return fibArray;
}

const reverseFib = function (nth) {
  const fibArray = [];

  return range(0, nth, 1).reduce(reverseTerms, fibArray).reverse();
}

console.log(reverseFib(1));
console.log(reverseFib(2));
console.log(reverseFib(3));
console.log(reverseFib(4));
console.log(reverseFib(5));
console.log(reverseFib(6));