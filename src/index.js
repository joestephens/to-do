window.onload = function() {

  todolist = new ToDoList(ToDo);

  todolist.createToDo("Eat Breakfast");
  todolist.createToDo("Buy doggie biscuits");

  reload();

  ಠ_ಠ("newtodo").addEventListener('submit', function(event) {
    event.preventDefault();
    todolist.createToDo(document.getElementById("task").value);
    reload();
  });

  ಠ_ಠ("list").addEventListener('click', completeTodo, false);

  function completeTodo(e) {
    e.preventDefault();
    if(e.target !== e.currentTarget) {
      var todo = todolist.getTodo(e.target.id);
      todo.makeComplete();
    }
    e.stopPropagation();
    reload();
  };

  function reload() {
    ಠ_ಠ("todos").set(todolist.convertListToHTML());
    document.getElementById('list').addEventListener('click', completeTodo, false);
  };

};
