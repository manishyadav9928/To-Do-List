let tasks = [];
let taskToDelete = null;

function Add() {
  const input = document.getElementById("inp");
  const task = input.value.trim();

  if (task) {
    // Add the task to the start of the array for top-down ordering
    tasks.unshift(task);
    input.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing tasks

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      ${task}
      <span>
        <i class="fas fa-edit" onclick="editTask(${index})"></i>
        <i class="fas fa-trash-alt" onclick="showDeleteModal(${index})"></i>
      </span>
    `;
    taskList.appendChild(taskItem);
  });
}

function editTask(index) {
  const newTask = prompt("Edit your task", tasks[index]);
  if (newTask) {
    tasks[index] = newTask;
    renderTasks();
  }
}

// Show delete confirmation modal
function showDeleteModal(index) {
  taskToDelete = index;
  document.getElementById('deleteModal').style.display = 'flex';
}

// Confirm delete
function confirmDelete() {
  tasks.splice(taskToDelete, 1);
  taskToDelete = null;
  document.getElementById('deleteModal').style.display = 'none';
  renderTasks();
}

// Cancel delete
function cancelDelete() {
  taskToDelete = null;
  document.getElementById('deleteModal').style.display = 'none';
}
