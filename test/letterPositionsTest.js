const {expect} = require('chai');
const letterPositions = require('../letterPositions')

describe('#letterPositions', () => {
  it('should return {h: [0], e: [1], l:[2, 3], o: [4]} when given "hello"', () => {
    expect(Object.values(letterPositions("hello"))).to.deep.equal(Object.values(expected))
  })
})

let expected = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
}
