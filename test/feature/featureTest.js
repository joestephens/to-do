process.env.NODE_ENV = 'test';

var server = require("http-server").createServer();
var Browser = require('zombie');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;


describe('home page', function() {

	beforeEach(function() {
		server.listen(3000);
		browser = new Browser({ site: "http://localhost:3000"});
	});

	afterEach(function() {
    // after each of the tests, close the server
    server.close(3000);
	})

	beforeEach(function(done) {
		browser.visit('/', done);
	});

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

	it('toDo starts with status not complete', function(){
		browser.fill('task', 'phone grandma');
	  browser.pressButton('Add to list');
		assert.include(browser.text('ul'), 'not completed');
	});

	it('once two checkboxes are ticked, both toDos have status complete', function(){
        browser.fill('task', 'phone grandma');
        browser.pressButton('Add to list');
        browser.check("checkbox1");
        browser.fill('task', 'wash hair');
        browser.pressButton('Add to list');
        browser.check("checkbox2");
        assert.notInclude(browser.text('ul'), 'not');
    });

});
