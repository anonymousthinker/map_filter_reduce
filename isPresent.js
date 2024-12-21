const isPresent = function (set, target) {
  console.log(set, target)
  const isEqual = function (isFound, element) {
    return element === target ? !isFound : isFound; 
  }

  return set.reduce(isEqual, false);
}

const isSsPresent = function (set, subset) {
  // if (!isPresent(set, subset)) {
  //   return false;
  // }

  return subset.reduce(isPresent, set);
}

console.log(isSsPresent([1, 2, 3, 4], [1, 2, 3]));