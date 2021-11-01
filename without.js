const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};

const without = (src, itr) => {
  let out = [];
  let diff = false;

  for (e of src) {

    for (i of itr) {
      if (i === e) {
        diff = true;
      }
    }

    if (diff === false) {
      out.push(e);

    } else {
      diff = false;
    }
  }
  return out;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", 'yeah', "3"], [1, 'yeahk', "3"]))

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;