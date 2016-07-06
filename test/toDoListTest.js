var chai = require('chai');
var chaiHtml = require('chai-html');
var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
var ToDo = require('../public/src/toDo.js').ToDo;
var ToDoList = require('../public/src/toDoList.js').ToDoList;

chai.use(chaiHtml);

describe("can add and retreive tasks in an array", function() {
  it('adds a task to an array', function(){
    var toDoList = new ToDoList();
    toDoList.add("Wash the bike");
    expect(toDoList.todos).to.include('Wash the bike')
  });
});

describe("return a HTML string with a task in it", function() {
  it('returns a string with HTML elements in it', function(){
    var toDoList = new ToDoList();
    let testTask = sinon.createStubInstance(ToDo);
    testTask.task = 'Wash the bike';

    toDoList.add(testTask);
    // NEED TO FIX!!!
    expect(toDoList.popTask()).html.to.equal(`<ul>
        <li id='list_0'>Wash the bike - undefined
          <form id="complete_form_0" action="/complete/0" method="post">
            <input type="submit" value="Complete">
          </form>
        </li>
      </ul>`
    );
  });
});
