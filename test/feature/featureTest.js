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

	it('contains some to dos', function(done) {
		browser.wait(3000);

		browser.fill('task', 'phone grandma');
	  browser.pressButton('Add to list');
		assert.include(browser.text('ul'), 'phone grandma');

		browser.fill('task', 'eat chocolate');
	  browser.pressButton('Add to list');
		assert.include(browser.text('ul'), 'phone grandma');
		assert.include(browser.text('ul'), 'eat chocolate');

		// var lastRequest = browser.lastRequest;
		// assert.equal(lastRequest.url, 'http://quiet-beach-24792.herokuapp.com/todos.json');



		done();
	});
	it("does soemthing", function() {
		browser.visit('/').then(function(done) {
			assert.include(browser.text('ul'), 'Shoot the ice cream van guy for Leo');
			assert.include(browser.text('ul'), 'Fix the Walkthroughs');
			assert.include(browser.text('ul'), 'Drink some beer!');
			assert.include(browser.text('ul'), 'Feed Sergio\'s neighbours cat!');
			done();
		});
	})


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
