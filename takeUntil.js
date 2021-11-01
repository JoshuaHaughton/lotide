const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const takeUntil = function(array, callback) {
  let out = [];
  for (element of array) {
    if (callback(element)) {
      break;
    } else {
      out.push(element)
    }
  }
  return out;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;