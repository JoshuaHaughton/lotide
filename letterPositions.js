const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};



const letterPositions = str => {
  let out = {};
  let holder = [];
  for (let i = 0; i < str.length; i++) {
    if (!Object.keys(out).includes(str[i]) && str[i] !== ' ') {
      holder.push(i);
      out[str[i]] = holder;
      holder = [];
    } else if (str[i] === ' ') {
      continue;
    } else {
      out[str[i]].push(i);
    }
  }
  return out;
};

let expected = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
}

assertArraysEqual(Object.values(letterPositions("hello")), Object.values(expected));

module.exports = letterPositions;