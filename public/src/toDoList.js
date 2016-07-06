(function(exports) {
  function ToDoList() {
    this.array = [];
  }

  ToDoList.prototype.add = function(task) {
    this.array.push(task);
  };

  ToDoList.prototype.popTask = function() {
    var formattedList = [];
    for(i=0; i< this.array.length; i++){
      formattedList.push("<li id='list_"+i+"'>" + this.array[i].task + "</li>")
    }
    return ("<ul>" + formattedList.join('') + "</ul>");
  };

  exports.ToDoList = ToDoList;
})(this);
