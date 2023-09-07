document.addEventListener("DOMContentLoaded", function () {
    const listNameInput = document.getElementById("listName");
    const createListButton = document.getElementById("createList");
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const listsContainer = document.getElementById("lists");

    createListButton.addEventListener("click", function () {
        const listName = listNameInput.value.trim();
        if (listName !== "") {
            const list = document.createElement("div");
            list.className = "todo-list";
            list.innerHTML = `
                <h2>${listName}</h2>
                <ul></ul>
                <button class="delete-list">Delete List</button>
            `;
            listsContainer.appendChild(list);
            listNameInput.value = "";
            addDeleteListListener(list);
        }
    });

    function addDeleteListListener(list) {
        const deleteListButton = list.querySelector(".delete-list");
        deleteListButton.addEventListener("click", function () {
            listsContainer.removeChild(list);
        });
    }

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskList = listsContainer.querySelector(".todo-list ul");
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

    function addDeleteTaskListener(li) {
        const deleteButton = task.querySelector(".delete-task");
        deleteTaskButton.addEventListener("click", function () {
            taskList.removeChild(task);
        });
    }
});
