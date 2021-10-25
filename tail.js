const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Uses arrow syntax to shorten the function
const tail = (arr) => arr.slice(1);

assertEqual(String(tail([1, 2, 3])), String([2, 3]));
