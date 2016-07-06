var expect = require('chai').expect
var assert = require('chai').assert

var ToDo = require('../public/src/toDo.js').ToDo;

describe("instantiate a todo", function() {
  it('creates an instance of ToDo', function(){
    var task = new ToDo();
    expect(task).to.be.an.instanceof(ToDo);
  });

  it('should return a string', function(){
    var toDo = new ToDo("elephant");
    expect(toDo.task).to.eq("elephant");
  });

  it('should be not completed', function() {
    var toDo = new ToDo("elephant");
    expect(toDo.completed()).to.eq("not completed");
  });

  it('should be completed', function() {
    var toDo = new ToDo("elephant");
    toDo.makeComplete();
    expect(toDo.completed()).to.eq("completed");
  });
});
