const eqObjects = (obj1, obj2) => {
  let isEqual = true;

  if (Object.keys(obj1).length === Object.keys(obj2).length) { 
    for (element of Object.keys(obj1)) { 
      if (!Array.isArray(obj1[element])) {
        if (obj1[element] !== obj2[element]) {
          isEqual = false;
        }
      } else {
        if (!eqArrays(obj1[element], obj2[element])) {
          isEqual = false;
        }
      }
    }
  } else {
    isEqual = false;
  }
  return isEqual;
}

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  eqObjects(obj1, obj2) === true ? console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
}

assertObjectsEqual({a: 1}, {a: 1})
assertObjectsEqual({a: 1}, {a: 2})

module.exports = assertObjectsEqual;