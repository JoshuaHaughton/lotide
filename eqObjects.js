const eqArrays = require('./eqArray')

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



module.exports = eqObjects;