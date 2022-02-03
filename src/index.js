import { format, compareAsc, isToday } from "date-fns";
import datepicker from 'js-datepicker';


const todo = (title, dueDate) => {
	const say = () => console.log(`${title}, ${dueDate}`);
	return { title, dueDate, say };
};

const walkDogs = todo("walkDogs", isToday(isToday));

walkDogs.say();

const todoList = [];

const selectDiv = document.getElementById('displaySection');
const input = document.createElement('input');
const btnAdd = document.createElement('button');
const btnCancel = document.createElement('button');
const div = document.createElement('div');

btnAdd.innerHTML = "Add";
btnCancel.innerHTML = "Cancel";

selectDiv.appendChild(input);
selectDiv.appendChild(btnAdd);
selectDiv.appendChild(btnCancel);
selectDiv.appendChild(div)

btnAdd.addEventListener('click', function() {
	if (input.value != '') {
		todoList.push(input.value);
		input.value = "";
		div.innerHTML += `<div> ${todoList.at(-1)} </div>`;
		console.log(todoList);

	}
});

btnCancel.addEventListener('click', function() {
	input.value = "";
});

for (let i = 0; i < todoList.length; i++) {
	selectDiv.appendChild(div);
};

// const addItem = () => {
// 	const btn = document.createElement('button');
// 	btn.innerHTML = "Add item";
// 	document.body.appendChild(btn);
// }