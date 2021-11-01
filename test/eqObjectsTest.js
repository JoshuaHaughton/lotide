const {expect} = require('chai')
const eqObjects = require('../eqObjects')




describe('#eqObjects', () => {
  it("should return true when given '{ c: '1', d: ['2', 3] }' and { c: '1', d: ['2', 3] } ", () => {
    expect(eqObjects(cd, dc)).to.deep.equal(true);
  });
  it('should return false when given "{ c: "1", d: ["2", 3] }" and "{ d: ["2", 3], c: "1" }"', () => {
    expect(eqObjects(cd, cd2)).to.deep.equal(false)
  })
});



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
