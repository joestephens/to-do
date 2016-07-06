var chai = require('chai');
var expect = require('chai').expect;
var chaiHtml = require('chai-html');
var sinon = require('sinon');

var List = require('../lib/models/list.js');
var Task = require('../lib/models/task.js');

chai.use(chaiHtml);

describe('List', function() {
  var list;

  beforeEach(function() {
    list = new List();
  });

  it('stores a new task', function() {
    let callGrandma = sinon.createStubInstance(Task);
    list.addItem(callGrandma);
    expect(list.items().pop()).to.eq(callGrandma);
  });

  it('provides an unordered list of all the tasks added', function() {
    let callGrandma = sinon.createStubInstance(Task);
    callGrandma._task = 'call grandma';

    list.addItem(callGrandma);
    var template = `
        <ul>
          <li>call grandma</li>
        </ul>
    `;
    expect(list.toHtml()).html.to.eq(template)
  });
});
