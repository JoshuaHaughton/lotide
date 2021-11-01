const {expect} = require('chai')
const eqArrays = require('../eqArray')


describe('#eqArray', () => {
  it("should return 'true' when given '[1, 2, 3]' and '[1, 2, 3]'", () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.deep.equal(true);
  });
  it("should return 'falde' when given '[1, 2, 3]' and '[1, 2, 3, 4]'", () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3, 4])).to.deep.equal(false);
  });
});



