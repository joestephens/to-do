var app = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');

describe('contact page', function() {
  before(function() {
    server = app.listen(8080);
    browser = new Browser({ site: 'http://localhost:8080' });
  });

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('has a index page', function() {
    browser.assert.status(200);
  });

  it('displays to-do list', function() {
    browser.assert.text('h1', 'To Do List App');
  });

  it('displays to-do list', function() {
    browser.assert.text('#list_0', 'Buy bananas - not completed');
    browser.assert.attribute('#complete_form_0', 'action', '/complete/0');
    browser.assert.text('#list_1', 'Wash the car - not completed');
    browser.assert.attribute('#complete_form_1', 'action', '/complete/1');
    browser.assert.text('#list_2', 'Ride an elephant - not completed');
    browser.assert.attribute('#complete_form_2', 'action', '/complete/2');
  });

  it('should submit a form', function(done) {
    browser.fill('task', 'Wash your bike');
    browser.pressButton('Click Me').then(function() {
      browser.assert.text('#list_3', 'Wash your bike - not completed');
    }).then(done, done);
  });

});
