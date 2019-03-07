import calculateTm from "./calculateTm.js";
import assert from 'assert';
describe("calculateTm", function () {
  it("should calculate the correct tm", function () {
    assert.equal(calculateTm("atagagaggga"), 26.21);
  });
});