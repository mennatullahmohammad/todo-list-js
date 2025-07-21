const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
addBtn.addEventListener("click", addingtasks)

function addingtasks(event) {
    event.preventDefault();
    const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const li = document.createElement("li");
  checkbox.addEventListener("change", () => {
  li.classList.toggle("completed");
});

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(checkbox);
  li.appendChild(span);
  taskList.appendChild(li);
  input.value = "";
}