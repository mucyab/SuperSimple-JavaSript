const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-23",
  },
  {
    name: "wash dishies",
    dueDate: "2022-12-23",
  },
];

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  // Generate HTML for user automatically,
  // Previouse Lesson have for Loop, but this was looped by .forEach(); easier to read and understand.
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div class="todo-grid">
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        " class= "delete-todo-button"> Delete </button> 
      </div>`;
    todoListHtml += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}
// Main Idea of JavaScript. Creating websites with JavaScript we follow three step process, 1. save the data, 2. Generate the HTML, 3. Make website interactive.

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateElement = document.querySelector(".js-due-date-input");
  const dueDate = dateElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
