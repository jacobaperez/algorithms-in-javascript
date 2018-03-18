const ds = require('../linkedlist');
const chai = require('chai');
const expect = chai.expect;

let ll = new ds.linkedlist(5);

describe("Linked List Tests", () => {
  it("Create linked list", () => {
    expect(ll.head).to.eql({"data": 5, "next": null});
  });
});
