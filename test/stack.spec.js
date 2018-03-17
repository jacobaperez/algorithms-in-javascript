const ds = require('../stack.js');
const chai = require('chai');
// const assert = require('assert');


let stack = new ds.stack(5);

const should = chai.should();
const expect = chai.expect;

describe('Stack', () => {
  it('should create stack with correct capacity', () => {
    expect(stack.capacity).to.equal(5);
  })
  it('Should insert and increase size', () => {
    stack.insert(1);
    stack.insert(2);
    expect(stack.size).to.equal(2);
    stack.insert(3);
    expect(stack.size).to.equal(3);
  })
})
