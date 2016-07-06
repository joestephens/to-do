(function(exports) {
  function ToDoList() {
    this.todos = [];
  }

  ToDoList.prototype.add = function(task) {
    this.todos.push(task);
  };

  ToDoList.prototype.popTask = function() {
    var formattedList = [];
    for(i=0; i< this.todos.length; i++){
      formattedList.push(`<li id='list_` + i + `'>` + this.todos[i].task + ` - ` + this.todos[i].completed() + `
          <form id="complete_form_` + i + `" action="/complete/` + i + `" method="post">
            <input type="submit" value="Complete">
          </form>
        </li>
      `);
    }
    return ("<ul>" + formattedList.join('') + "</ul>");
  };

  exports.ToDoList = ToDoList;
})(this);
