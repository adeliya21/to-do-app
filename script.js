document.addEventListener("DOMContentLoaded", function () {
    const listNameInput = document.getElementById("listName");
    const createListButton = document.getElementById("createList");
    const todoContainer = document.querySelector(".todo-container");

    createListButton.addEventListener("click", function () {
        const listName = listNameInput.value.trim();
        if (listName !== "") {
            const todoList = document.createElement("div");
            todoList.className = "todo-list";
            todoList.innerHTML = `
                <h2>${listName}</h2>
                <div class="input-container">
                    <input type="text" id="task-input" placeholder="Add a new task">
                    <button id="add-task">Add</button>
                </div>
                <ul class="task-list"></ul>
                <button class="delete-list">Delete List</button>
            `;
            todoContainer.appendChild(todoList);
            listNameInput.value = "";
            addDeleteListListener(todoList);
            addAddTaskListener(todoList);
        }
    });

    function addDeleteListListener(list) {
        const deleteListButton = list.querySelector(".delete-list");
        deleteListButton.addEventListener("click", function () {
            todoContainer.removeChild(list);
        });
    }

    function addAddTaskListener(list) {
        const taskInput = list.querySelector("#task-input");
        const addTaskButton = list.querySelector("#add-task");
        const taskList = list.querySelector(".task-list");

        addTaskButton.addEventListener("click", function () {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span>${taskText}</span>
                    <span class="delete-task">Delete</span>
                `;
                taskList.appendChild(li);
                taskInput.value = "";
                addDeleteTaskListener(li);
            }
        });
    }

    function addDeleteTaskListener(task) {
        const deleteTaskButton = task.querySelector(".delete-task");
        deleteTaskButton.addEventListener("click", function () {
            const taskList = task.parentElement;
            taskList.removeChild(task);
        });
    }
});

