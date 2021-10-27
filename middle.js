const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};

const middle = arr => {
  let mid = Math.ceil(arr.length/2);
  let out = [];

  if (arr.length <= 2) {
    return out;
  }
  if (arr.length % 2 !== 0) {
    out.push(mid)
  } else {
    out.push(mid, mid+1)
  }
  return out;
}

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5])

assertArraysEqual(middle([1, 2]), [])
