var app = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');
describe('index page', function() {

  beforeEach(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

//   it("should have defined headless browser", function(next){
//     expect(typeof browser != "undefined").toBe(true);
//     expect(browser instanceof Browser).toBe(true);
//     next();
// });

  it('has a index page', function() {
    browser.assert.status(200);
  });
  it('displays to-do list', function() {
    browser.assert.text('#todos', 'Eat Breakfast - Not Completed Buy doggie biscuits - Not Completed');
  });
  it('should create a new to-do on form submission', function() {
    browser.fill('task', 'Wash Grandma');
    browser.pressButton('submit');
    // browser.wait().then(function() {
    //   console.log(browser.dump());
    // });
    browser.assert.text('#todos', 'Eat Breakfast - Not Completed Buy doggie biscuits - Not Completed Wash Grandma - Not Completed');
  });
  it('should have a clickable button next to the to-do', function() {
    browser.pressButton('#complete_0');
    browser.assert.text('#todos', 'Eat Breakfast - Completed Buy doggie biscuits - Not Completed Wash Grandma - Not Completed');
  });
});
