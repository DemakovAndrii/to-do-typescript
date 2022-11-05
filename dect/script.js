"use strict";
const form = document.querySelector("#new-task-form");
const title = document.querySelector("#new-task-title");
const list = document.querySelector("#list");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((title === null || title === void 0 ? void 0 : title.value) == null || (title === null || title === void 0 ? void 0 : title.value) == "")
        return;
    const newItem = {
        id: 1,
        checked: false,
        name: title === null || title === void 0 ? void 0 : title.value,
        date: new Date(),
    };
    addNewItem(newItem);
});
const addNewItem = (task) => {
    const box = document.createElement("li");
    const name = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    list === null || list === void 0 ? void 0 : list.append(box);
    box.append(name);
    name.append(checkbox, task.name);
};
