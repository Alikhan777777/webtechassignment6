const todoList = [{
    name: "Submit assignment",
    dueDate: "2025-10-20",
    description: "Submit the Web Technologies assignment 6 about applying js(DOM) and html"
}];
function renderTodoList() {
    let todoListHTML = "";
    todoList.forEach(function (todoObject, index) {
        const html = `
        <div class="todo-item">
            <div class="item">
                <div class="item-name">${todoObject.name}</div>
                <div class="item-description">${todoObject.description}</div>
                <div class="item-due-date">due to: ${todoObject.dueDate}</div>
            </div>
            <div class="item-buttons">
                <button onclick="
                    todoList.splice(${index}, 1);
                    renderTodoList();
                    " class="delete-todo-button">Delete</button>
                <p><input type="checkbox" class="complete-todo-checkbox">complete</p>
            </div>
        </div>`;
        todoListHTML += html;
    });

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => addTodo());
function addTodo() {
    const nameInputElement = document.querySelector(".js-name-input");
    const name = nameInputElement.value;
    const dateInputElement = document.querySelector(".js-due-date-input");
    const dueDate = dateInputElement.value;
    const descriptionInputElement = document.querySelector(".js-description-input");
    const description = descriptionInputElement.value;
    if (name === "" || dueDate === "" || description === "") {
        return;
    }
    todoList.push({
        name: name,
        dueDate: dueDate,
        description: description
    });
    nameInputElement.value = null;
    descriptionInputElement.value = null;
    dateInputElement.value = null;

    renderTodoList();
}
