type Task = {
	id: number;
	checked: boolean;
	name: string;
	date: Date;
};

const form = document.querySelector<HTMLFormElement>("#new-task-form");
const title = document.querySelector<HTMLInputElement>("#new-task-title");
const list = document.querySelector<HTMLUListElement>("#list");

form?.addEventListener("submit", (e) => {
	e.preventDefault();

	if (title?.value == null || title?.value == "") return;

	const newItem: Task = {
		id: 1,
		checked: false,
		name: title?.value,
		date: new Date(),
	};

	addNewItem(newItem);
});
const addNewItem = (task: Task) => {
	const box = document.createElement("li");
	const name = document.createElement("label");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	list?.append(box);
	box.append(name);
	name.append(checkbox, task.name);
};
