const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(String(tail([1, 2, 3])), String([2, 3]));
  });
});

