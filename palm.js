const isOdd = function (num) {
  return num % 2;
}

const half = function (num) {
  return num * 0.5;
}

const isMoreThanThreshold = function (string) {
  return string.length > 5;
}

const capitalise = function (string) {
  return string.toUpperCase();
}

const isLonger = function (string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

const combine = function (string1, string2) {
  return string1 + string2;
}

const multiply = function (num1, num2) {
  return num1 * num2;
}

const countOddNums = function (count, element) {
  return isOdd(element) ? count + 1 : count;
}

const map = function (mapper, elements) {
  const array = [];

  for (const element of elements) {
    array.push(mapper(element));
  }

  return array;
}

const filter = function (predicate, elements) {
  const array = [];

  for (const element of elements) {
    if (predicate(element)) {
      array.push(element);
    }
  }

  return array;
}

const reduce = function (reducer, elements, init) {
  for (const element of elements) {
    init = reducer(init, element);
  }

  return init;
}

const roots = function (elements) {
  return map(Math.sqrt, elements);
}

const odds = function (elements) {
  return filter(isOdd, elements);
}

const halves = function (elements) {
  return map(half, elements);
}

const isLongerThanLimit = function (strings) {
  return filter(isMoreThanThreshold, strings);
}

const capitalisedStrings = function (strings) {
  return map(capitalise, strings);
}

const longestString = function (strings) {
  return reduce(isLonger, strings, '');
}

const combined = function (strings) {
  return reduce(combine, strings, '');
}

const product = function (numbers) {
  return reduce(multiply, numbers, 1);
}

const countOdds = function (numbers) {
  return reduce(countOddNums, numbers, 0);
}

console.log(countOdds([1, 2, 4, 8, 7]));