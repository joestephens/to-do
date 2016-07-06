(function(exports) {
  function ToDo(task) {
    this.task = task;
    this.complete = false;
  };

  ToDo.prototype.completed = function() {
    if(this.complete) {
      return "completed";
    }
    return "not completed";
  };

  ToDo.prototype.makeComplete = function() {
    this.complete = true;
  };

  exports.ToDo = ToDo;
})(this);
