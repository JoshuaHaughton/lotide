const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  return arr1.join(' ') === arr2.join(' ') ? true : false;
};

const eqObjects = (obj1, obj2) => {
  let isEqual = true;
  
  //check if the array which holds the keys of both objects are the same length
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

