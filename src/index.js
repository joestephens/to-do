	var list = new List();

	var updateList = function(){
		document.getElementById('list-printed').innerHTML = printItems(list.list);
	};

	document.getElementById('submit').addEventListener('click', addTask, false);

	function addTask(evt){
		evt.preventDefault();
		list.addItem(document.getElementById('task-input').value);
		updateList()
		document.getElementById('form').reset();
	};

	function activateChange(itemIndex){
		list.list[itemIndex].changeStatus();
		updateList();
	};

	var ajax = function() {
		console.log('LINE 22')
		$.getJSON('http://quiet-beach-24792.herokuapp.com/todos.json', function(data) {
			console.log('LINE 24')
			$.each(data, function(k, v) {
				console.log('LINE 26')
				list.addItem(v.text);
				updateList();
			})
			console.log('LINE 30')
		});
		console.log('LINE 32')
	};
	console.log('LINE 34')
	ajax();
	console.log('LINE 36')

	var ಠ_ಠ = function() {
		console.log("HI!");
	}
ಠ_ಠ();
