const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let out = {};
  for (const s of str) {
    if (!Object.keys(out).includes(s) && s !== ' ') {
      out[s] = 1
    } else if (s === ' ') {
      continue;
    } else {
      out[s] += 1
    }
  }
  return out;
}

console.log(countLetters("lighthouse in the house"));