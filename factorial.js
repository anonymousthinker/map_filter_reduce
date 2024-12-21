
/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

const range = function (from, to, step) {
  const numbers = [];
  for (let i = from; i <= to; i++) {
    numbers.push(i);
  }
  return numbers;
}

const multiply = function (x, y) {
  return x * y;
}

function factorial(number) {
  return range(2, number).reduce(multiply, 1);
}

function getMark(outcome) {
  return outcome ? '✅' : '❌';
}

function createMessage(number, expected, actual) {
  const contextPart = 'The factorial of ' + number;
  const expectationPart = ' is ' + expected;
  const actualPart = ' and is ' + actual;
  const mark = getMark(actual === expected);
  
  return mark + contextPart + expectationPart + actualPart;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  console.log(createMessage(number, expected, actual));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
  testFactorial(6, 720);
  testFactorial(7, 5040);
}

testAll();
