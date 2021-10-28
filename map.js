const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};

const map = (arr, callback) => {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
