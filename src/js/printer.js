'use strict';

(function(exports) {

	function printItems(array) {
	  var array = array;
	  var print = '';

	  for (var i = 0; i < array.length; i++) {
	    var print = print.concat(
				'<li><button class="button_class" name="checkbox' + (i + 1) + '" onclick=activateChange(' + i + ')>Change Status</button> ' + array[i]._item + ' - ' + array[i].printStatus() + '</li>');
	  }

	  return '<ul>' + print + '</ul>';
	};

	exports.printItems = printItems;

})(this);
