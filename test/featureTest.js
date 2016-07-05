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
});
