const addBtn = document.getElementById("addBtn");
const taskInput = document.querySelector(".task-input");
const todoContainer = document.getElementById("todoList");

addBtn.addEventListener("click", ()=> {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.innerHTML = `<span>${taskText}</span><button class="del-btn">X</button>`;

    todoContainer.appendChild(taskCard);
    taskInput.value="";

    taskCard.querySelector(".del-btn").addEventListener("click", () => {
        taskCard.remove();
    });
});