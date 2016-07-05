function ToDoList() {
  this.array = [];
}

ToDoList.prototype.add = function(task) {
  this.array.push(task);
};

ToDoList.prototype.popTask = function() {
  var poppedTask = this.array.pop();
  var concat = "<ul><li>";
  var concat2 = "</li></ul>";
  return (concat + poppedTask.task + concat2);
};

module.exports = ToDoList;
