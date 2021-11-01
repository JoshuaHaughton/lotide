const findKeyByValue = (obj, val) => {
   for (element in obj) {
     if (obj[element] === val) {
       return element;
     }
   }
 }

module.exports = findKeyByValue;