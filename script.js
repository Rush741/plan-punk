const addBtn = document.getElementById("addBtn");
const taskInput = document.querySelector(".task-input");
const todoContainer = document.getElementById("todo");

//Task Input into container
addBtn.addEventListener("click", addTaskToContainer);
document.addEventListener("keypress", function(event) {
    console.log(event.key)
    if(event.key === "Enter") {
        addTaskToContainer();
    }
})

function addTaskToContainer() {
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
}

const list = ["todo", "inprogress", "completed"];

list.forEach(function(id) {
    new Sortable(document.getElementById(id), {
        group: "shared",
        animation: 150,
    });
});