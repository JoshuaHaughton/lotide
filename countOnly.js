const countOnly = (allItems, itemsToCount) => {
  let out = {};
  for (const a of allItems) {
    if (!Object.keys(out).includes(a)) {
      for (const o in itemsToCount) {
        if (o === a && itemsToCount[o] === true) {
          out[a] = 1;
        }
      }
    } else {
      out[a] += 1;
    }
  }
  return out;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

module.exports = countOnly;