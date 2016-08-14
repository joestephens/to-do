var assert = require('chai').assert;
var expect = require('chai').expect;
var Item = require('../../src/js/item.js').Item;

describe('Item', function() {

	var item;

	before(function() {
		item = new Item('phone grandma');
	});

  it('should store a item when constructed', function() {
  	expect(item.get()).to.equal('phone grandma');
  });

  it('Item completion is set to false by default ', function() {
    expect(item.status()).to.be.false;
  });

  it('prints status of items completeness', function() {
    expect(item.status()).to.be.false;
    expect(item.printStatus()).to.equal('not completed')
  });

  describe('task has been completed', function() {

    before(function() {
      item.changeStatus();
    });

    it('Changes status of item to complete', function() {
      expect(item.status()).to.be.true;
    });

    it('prints status of items completeness', function() {
      expect(item.printStatus()).to.equal('completed')
    });
  });

});
