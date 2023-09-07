document.addEventListener("DOMContentLoaded", function () {
    const listNameInput = document.getElementById("listName");
    const createListButton = document.getElementById("createList");
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const listsContainer = document.getElementById("lists");

    

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
