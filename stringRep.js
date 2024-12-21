
/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function replace(text, match, replacement) {
  function mapper(char) {
    return char === match ? replacement : char;
  }

  return [...text].map(mapper).join('');
}

console.log(replace('sakib', 'b', 'i'));

function getMark(outcome) {
  return outcome ? '✅' : '❌';
}

function createMessage(text, match, replacement, expected, actual) {
  const contextPartOne = 'The string "' + text + '" after replacing "';
  const contextPartTwo = match + '" with "' + replacement;
  const expectationPart = '" is "' + expected;
  const actualPart = '" and is "' + actual + '"';
  const mark = getMark(actual === expected);

  return mark + contextPartOne + contextPartTwo + expectationPart + actualPart;
}

function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  console.log(createMessage(text, match, replacement, expected, actual));
}

function testAll() {
  // testStringReplace('a', 'a', 'b', 'b');
  // testStringReplace('b', 'b', 'b', 'b');
  // testStringReplace('a', 'b', 'c', 'a');
  // testStringReplace('aabb', 'b', 'c', 'aacc');
  // testStringReplace('aabb', 'a', 'c', 'ccbb');
  // testStringReplace('aabb', 'c', 'z', 'aabb');
  // testStringReplace('abc', 'b', 'x', 'axc');
  // testStringReplace('hello world', 'l', 'n', 'henno wornd');
  // testStringReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  // testStringReplace('', 'd', 'e', '');
}

// testAll();
