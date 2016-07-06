var app = require('http-server').createServer();
var Browser = require('zombie');
var assert = require('chai').assert;

describe('user visits page', function() {
  before(function() {
    server = app.listen(8080);
    browser = new Browser({ site: 'http://localhost:8080' })
  });

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('should have a title', function() {
    browser.assert.text('title', 'To Do List');
  });
});
