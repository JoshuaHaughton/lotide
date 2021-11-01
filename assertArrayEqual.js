const eqArrays = require('./eqArray')

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;