var expect = require('chai').expect
var assert = require('chai').assert

var ToDo = require('../public/src/toDo.js').ToDo;
var ToDoList = require('../public/src/toDoList.js').ToDoList;

describe("instantiate a todo", function() {
  it('creates an instance of ToDo', function(){
    var task = new ToDo();
    expect(task).to.be.an.instanceof(ToDo);
  });
});

describe("can add and retreive tasks in an array", function() {
  it('adds a task to an array', function(){
    var todolist = new ToDoList();
    todolist.add("Wash the bike");
    expect(todolist.array).to.include('Wash the bike')
  });
});

describe("return a HTML string with a task in it", function() {
  it('returns a string with HTML elements in it', function(){
    var todolist = new ToDoList();
    var testTask = new ToDo("Wash the bike");
    todolist.add(testTask);
    expect(todolist.popTask()).to.equal("<ul><li id='list_0'>Wash the bike</li></ul>");
  });
});
