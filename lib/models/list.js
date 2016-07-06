var Task = require('../../lib/models/task.js');
var mustache = require('mustache');

function List() {
  this._list = [];
}

List.prototype.addItem = function(item) {
  this._list.push(item);
};

List.prototype.items = function() {
  return this._list;
};

List.prototype._toJson = function() {
  var jsonified = JSON.stringify({ "tasks": this._list });
  return jsonified;
};

List.prototype.toHtml = function() {
  var template = `
    <ul>
      {{#tasks}}
      <li>{{_task}}</li>
      {{/tasks}}
    </ul>
  `;
  mustache.parse(template);
  var rendered = mustache.render(template, JSON.parse(this._toJson()));
  return rendered;
};

module.exports = List;
