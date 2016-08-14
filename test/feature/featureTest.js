process.env.NODE_ENV = 'test';

var server = require("http-server").createServer();
var Browser = require('zombie');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('home page', function() {

	beforeEach(function(done) {
		server.listen(3000);
		browser = new Browser({ site: "http://localhost:3000"});
		browser.visit('/', done);
	});

	afterEach(function() {
    server.close(3000);
	})

	it('title attribute is To Do List', function() {
		assert.equal(browser.text('title'), 'To Do List');
	});

	it('contains some to dos', function() {
		browser.fill('task', 'phone grandma');
	  browser.pressButton('Add to list');
		assert.include(browser.text('ul'), 'phone grandma');

		browser.fill('task', 'eat chocolate');
	  browser.pressButton('Add to list');
		assert.include(browser.text('ul'), 'phone grandma');
		assert.include(browser.text('ul'), 'eat chocolate');
	});

	it("contains some to dos from json", function() {
		assert.include(browser.text('ul'), 'Shoot the ice cream van guy for Leo');
		assert.include(browser.text('ul'), 'Fix the Walkthroughs');
		assert.include(browser.text('ul'), 'Drink some beer!');
		assert.include(browser.text('ul'), 'Feed Sergio\'s neighbours cat!');
	});

	it('toDo starts with status not complete', function(){
		browser.fill('task', 'phone grandma');
	  browser.pressButton('Add to list');
		assert.include(browser.text('ul'), 'phone grandma - not completed');
	});

	it('once two checkboxes are ticked, both toDos have status complete', function(){
    browser.fill('task', 'phone grandma');
    browser.pressButton('Add to list');
    browser.pressButton("checkbox1");
    browser.fill('task', 'wash hair');
    browser.pressButton('Add to list');
    browser.pressButton("checkbox2");
    assert.include(browser.text('ul'), 'phone grandma - completed');
   });

});
