const {expect} = require('chai');
const findKeyByValue = (require('../findKeyByValue'))

describe('#findKeyByValue', () => {
  it("should return 'drama' when given 'The Wire'", () => {
    expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.deep.equal("drama");
  });
  it("should return undefined when given 'That '70s Show'", () => {
    expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.deep.equal(undefined);
  })
});

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

