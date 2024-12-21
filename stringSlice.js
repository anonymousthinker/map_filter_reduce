
/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function max(firstNumber, secondNumber) {
  return firstNumber < secondNumber ? secondNumber : firstNumber;
}

function min(firstNumber, secondNumber) {
  return firstNumber < secondNumber ? firstNumber : secondNumber;
}


function slice(text, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);
  const predicate = function (char, index) {
    return index >= startIndex && index <= endIndex ? char : '';
  }

  return [...text].filter(predicate).join('');
}

function getMark(outcome) {
  return outcome ? '✅' : '❌';
}

function createMessage(text, start, end, expected, actual) {
  const contextPartOne = 'The ' + text + ' after slicing from "';
  const contextPartTwo = start + '" to "' + end;
  const expectationPart = '" is "' + expected;
  const actualPart = '" and is "' + actual + '"';
  const mark = getMark(actual === expected);

  return mark + contextPartOne + contextPartTwo + expectationPart + actualPart;
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  console.log(createMessage(text, start, end, expected, actual));
}

function testAll() {
  testStringSlice('a', 0, 0, 'a');
  testStringSlice('ab', 0, 1, 'ab');
  testStringSlice('abc', 0, 3, 'abc');
  testStringSlice('abc', -1, 2, 'abc');
  testStringSlice('abcd', 1, 2, 'bc');
  testStringSlice('abcde', 2, 2, 'c');
  testStringSlice('abc', -3, 5, 'abc');
  testStringSlice('abcde', -23, 23, 'abcde');
  testStringSlice('string', 6, 8, '');
  testStringSlice('string', -4, -1, '');
  testStringSlice('step', 3, 1, '');
}

testAll();
