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

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="delete">Delete</span>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
            addDeleteListener(li);
        }
    });

    function addDeleteListener(li) {
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });
    }
});
