'use strict';

(function(exports) {

	function printItems(array) {
	  var array = array;
	  var print = '';

	  for (var i = 0; i < array.length; i++) {
	    var print = print.concat(
				'<li><div><input id="tickbox" type="checkbox" name="checkbox' + (i + 1) + '"> ' + array[i]._item + ' - ' + array[i].printStatus() + '</div></li>');
	  }
	  return '<ul>' + print + '</ul>';

	};

	exports.printItems = printItems;

})(this);
