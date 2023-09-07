document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("taskList");

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
