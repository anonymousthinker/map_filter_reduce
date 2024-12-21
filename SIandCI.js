const multiply = function (num1, num2) {
  return num1 * num2;
}

const simpleInterest = function (principle, rate, time) {
  return ([principle, rate, time].reduce(multiply, 1)) / 100;
}

const compoundInterest = function (principle, rate, time) {
  const interest = ([1, rate].reduce(multiply, principle) / 100);

  if (time === 1) {
    return interest;
  }

  return interest + compoundInterest(interest + principle, rate, time - 1);
}

console.log(simpleInterest(10, 5, 2));
console.log(compoundInterest(1000, 10, 2));