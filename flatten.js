const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};

const flatten = arr => {
  let out = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let a of arr[i]) {
        out.push(a);
      }

    } else {
      out.push(arr[i]);
    }
  }
  return out;
};

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
