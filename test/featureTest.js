var app = require('http-server').createServer();
var assert = require('chai').assert;
var Browser = require('zombie');

describe('user visits page', function() {
  before(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' })
  });

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('should have a title', function() {
    browser.assert.text('title', 'To Do List');
  });
});
