const ds = require('../linkedlist');
const chai = require('chai');
const expect = chai.expect;

let ll = new ds.linkedlist(5);
let dud = new ds.linkedlist();

describe("Linked List Tests", () => {
  it("Create linked list", () => {
    expect(ll.head).to.eql({"data": 5, "next": null});
  });

  it('Cannot make empty linked list', () => {
    expect(dud).to.eql({});
  })

  it('Should add to head', () => {
    ll.addToHead(4);
    expect(ll.head).to.eql({"data": 4, "next": {"data": 5, "next": null}})
  })


});
