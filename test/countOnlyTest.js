const {expect} = require('chai');
const countOnly = require('../countOnly')

describe('#countOnly', () => {
  it("should return '1' when given '['Jason']'", () => {

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    expect(result1["Jason"]).to.deep.equal(1);

  });
});


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
