const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', addTodoItem);

function addTodoItem() {
  const todoItem = todoInput.value.trim();
  if (todoItem !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${todoItem} <span onclick="removeTodoItem(this)">X</span>`;
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}

function removeTodoItem(element) {
  const listItem = element.parentElement;
  listItem.remove();
}