const ds = require('../queue.js');
const chai = require('chai');
// const assert = require('assert');


let q = new ds.queue(5);

const should = chai.should();
const expect = chai.expect;

describe('Queue', () => {

  it('should create queue with appropriate capacity', () => {
    expect(q.capacity).to.equal(5);
  })
  it("should insert and add to size", () => {
    q.insert(1);
    expect(q.size).to.equal(1);
    q.insert(2);
    q.insert(3);
    expect(q.size).to.equal(3);
  })



})
