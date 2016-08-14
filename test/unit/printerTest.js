var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var printItems = require('../../src/js/printer.js').printItems;

describe('Printer', function() {

	var Stub = sinon.stub();
  Stub.returns({ _printStatus: 'not completed'});
  Stub.withArgs('eat chocolate').returns({ _item: 'eat chocolate', _complete: false });

  it('should print a list of items in HTML', function() {
    var testArray = [{_item: 'phone grandma', _complete: false}, { _item: 'eat chocolate', _complete: false}];
    expect(printItems(testArray)).to.contain('<ul><li><div><input type="checkbox"> phone grandma - not completed</div></li><li><div><input type="checkbox"> eat chocolate - not completed</div></li></ul>')
	});
});
