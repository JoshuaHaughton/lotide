const flatten = require('../flatten')
const { expect } = require('chai');

describe('#flatten', () => {
  it("should return '[1, 2, 3, 4, 5, 6]' when given '[1, 2, [3, 4], 5, [6]]'", () => {
    expect(flatten([1, 2, [3, 4], 5, [6]])).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
});

