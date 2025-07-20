const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todo");
const inProgressList = document.getElementById("inprogress");
const doneList = document.getElementById("done");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  const allTasks = [];
  ["todo", "inprogress", "done"].forEach((columnId) => {
    const column = document.getElementById(columnId);
    const cards = column.querySelectorAll(".task-card");
    cards.forEach((card) => {
      allTasks.push({
        text: card.querySelector("span").innerText,
        column: columnId,
      });
    });
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function createTask(text, columnId) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn">✖</button>
  `;

  taskCard.querySelector(".delete-btn").addEventListener("click", () => {
    taskCard.remove();
    saveTasks();
  });

  document.getElementById(columnId).appendChild(taskCard);
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTask(taskText, "todo");
  taskInput.value = "";
  saveTasks();
});

// Restore saved tasks on load
tasks.forEach((task) => createTask(task.text, task.column));

// Enable drag-and-drop using Sortable
["todo", "inprogress", "done"].forEach((id) => {
  new Sortable(document.getElementById(id), {
    group: "shared",
    animation: 150,
    onEnd: saveTasks, // Save tasks after drag/drop
  });
});
