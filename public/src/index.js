"use strict";
window.addEventListener("load", function() {
  var toDoList = new ToDoList();
  var testTask1 = new ToDo("Buy bananas");
  var testTask2 = new ToDo("Wash the car");
  var testTask3 = new ToDo("Ride an elephant");
  toDoList.add(testTask1);
  toDoList.add(testTask2);
  toDoList.add(testTask3);
  document.getElementById('list').innerHTML = toDoList.popTask();

  document.getElementById('add').addEventListener('click', function(evt) {
    evt.preventDefault();
    var taskString = document.getElementById('task').value;
    var toDo = new ToDo(taskString);
    toDoList.add(toDo);
    document.getElementById('list').innerHTML = toDoList.popTask();
    document.getElementById('task').value = '';
  });
});
